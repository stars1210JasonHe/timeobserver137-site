---
title: "A silent daemon will eat itself"
date: 2026-05-19
lang: en
ghostSlug: silent-daemon
---

*On three failure modes of unattended automation*

Once, I SSHed into a Win11 workstation to scan for new messages from the night. I finished typing the command, the cursor paused for a moment, and the prompt came back. Nothing new.

Fifteen minutes later I tried again. Still nothing new.

I took a look with `tasklist`: the poller process was still there, the PID had not changed, it had not crashed. I went through the log — the log file's mtime was 0:17 in the early morning. It was now 6:47 in the morning. **The poller had been alive but producing nothing for six and a half hours**.

Later I took it apart and got it clear: one group message containing a TAB character had pinned the entire polling loop to the ground and spun it all night. Every loop, this message was read out again as "unprocessed", every time it blew up on the same `WinError 123: The filename, directory name, or volume label syntax is incorrect`, every time it kept the state from being saved, and the next round read the same message out again. An infinite loop. Quiet. Every loop printed to stderr, but stderr scrolled out of the PowerShell scrollback, and nobody looked.

This is a very specific failure mode: **the process is alive, the CPU is idle, the output is zero, and an outside observer cannot tell the difference**. Calling this a "silent failure" is not quite accurate; it is not that it "made no sound", it is that "when it made a sound, nobody was listening".

The three sections below are three incidents I stepped on this year. On the surface they are three unrelated things; at the engineering level they are the same set of cracks. The goal of the article is not to talk about which bugs were fixed — the bugs were all fixed, the commits are there — but to pull these three things onto one picture and look at **why unattended code fails in this way, and what should be prepared in advance while writing it**.

---

## 1. One TAB punches through the whole poller

The group message that jammed the poller looked like this: a user had copied and pasted a class schedule, which contained tab characters. After the poller got the message, the first thing it did was use the subject as a folder name to create the project directory. The folder-name cleaning logic was written in a very natural way:

```python
safe = re.sub(r'[<>:"/\\|?*]', '', subject)
```

This is the standard filter for characters forbidden in Windows file names. I copied the version from some SO answer, which filtered all the visible characters Windows rejects.

It missed control characters.

Windows NTFS does not accept the range `\x00 - \x1f` — including TAB (`\x09`), including LF and CR — as path characters. But the vast majority of popular "unsafe filename" articles mention only the 9 visible characters `<>:"/\\|?*`. Control characters are an invisible failure mode; a dev pasting their own test data generally cannot construct them.

The first layer of defense should be this:

```python
safe = re.sub(r'[<>:"/\\|?*\x00-\x1f]+', '_', subject).strip(' ._')
```

Control characters + visible characters forbidden by Windows + trailing whitespace and dots (Windows also does not allow endings like `foo.` or `foo`). This is **field cleaning on the write side**, not logging, not try-except; it kills the dirty data before it touches the disk.

But this layer alone is not enough. Later I added a second layer — **wrap each message tightly in its own try-except**:

```python
for msg in batch:
    try:
        process_one(msg)
    except Exception as e:
        log.exception(f"skip msg id={msg.id}: {e}")
        continue
```

This layer handles "fields I did not think of". Even if the cleaning misses some character — even if some new kind of dirty data comes in the future — a single failure will not block the whole batch.

The third layer is the easiest to overlook: **the granularity of state saving**. The first version was written like this:

```python
for msg in batch:
    process_one(msg)
save_state(last_id)  # only saved after the whole batch has run
```

If process_one throws in the middle, save_state does not run, the next polling round starts reading again from the same last_id, reads the same bad data again, and blows up again. **The infinite loop is not a bug; it is the inevitable product of this state-save design**.

The correct way to write it is a row-level state save, or the more robust idempotent dedupe:

```python
for msg in batch:
    if msg.id <= last_processed:
        continue
    try:
        process_one(msg)
    except Exception as e:
        log.exception(...)
    save_state(msg.id)  # advance whether or not it succeeded
```

Or push the dedupe into process_one: before writing, check whether `msg.id` already exists, and if it exists, skip.

At the moment of writing the code, these three layers of defense look somewhat redundant. If the first layer is fine-grained enough, that is enough, right? I was lazy once, so now I am not lazy. Within one year, a single TAB character ran a whole night of infinite loop in my system, and it made me feel that **as long as this code runs unattended, the judgment "fine-grained enough" should not be made by the person writing the code**. The code will run for a long time, and it will be hit by some future dirty data. Not whether, but which day. Each of the three layers of defense assumes the other two will fail.

---

## 2. The code was changed but did not take effect

While fixing this TAB bug, I made a second mistake.

I pushed the new code up with scp — verified that the file mtime was new, the diff looked right — then I ran `schtasks /run /tn MessagePoller`, saw the task scheduler return success, and walked away.

The next morning I found it still in an infinite loop on the same TAB.

I looked at the process. `wmic process where "name='python.exe'" get ProcessId,CommandLine,CreationDate`; in the output, CreationDate was 12 days ago. **The poller had been running for a long time already, running code from 12 days ago**.

The Task Scheduler setting was "run once every 5 minutes". But inside, the poller was a `while True: scan(); sleep(300)` loop. After the script was first launched by Task Scheduler, the process did not exit; it went into daemon mode on its own. `schtasks /run` started another process — but because the script had a file lock against multiple instances, the newly started one exited immediately, and the old one kept running. **Task Scheduler showed success, the file mtime was new, but what was running in RAM was still the old .py**.

In this situation a "redeploy" must kill explicitly:

```cmd
taskkill /F /PID <stale_pid>
schtasks /run /tn MessagePoller
```

Then verify again with `wmic` that the new PID's CreationDate is on the scale of minutes rather than days.

Writing this, I realized that the essence of this matter is: **two different modes of running were mislabeled by the same scheduler**. One is the "periodic short task" (the standard use of Task Scheduler; every run is a new process), the other is the "resident daemon" (the process does not exit; the scheduler just jumpstarts it once). The code was written mixing the two, the scheduler could not tell the difference, and the person deploying — me — could easily not tell the difference either.

After fixing this one I added two habits:

- In daemon-type scripts, print `script mtime` and the hash of `__file__` to the log in the first few lines, one line at the top of every scan. On the first scan after new code goes live, you can see the new hash in the log.
- When writing a daemon script, write an `--once` parameter at the same time. CI tests use `--once`; running the daemon in prod does not need it — but when verifying a deploy I can run it once locally with `--once`, see whether the new version really has any major behavior change, and then consider killing the old process.

The second habit has saved me several times.

---

## 3. Nobody in the loop

After fixing the two above, I thought I had formed a certain immunity to unattended automation. Then I ran into three things at the same time.

The first was a prediction script that ran on weekends. It grabbed CSVs from some data source, merged them, wrote parquet, and when the whole pipeline finished it output a bets.csv. Every Monday morning I scanned the results. One Monday when I scanned, I found bets.csv had 0 rows — an empty file, header written, data empty. I thought there was just no market this week, finished scanning and closed it.

Only nine days later did it occur to me: the column names in the upstream CSV had changed. The merge step silently skipped every row (the join key did not match). For 9 days I kept looking at an empty file, telling myself "no market this week", every Monday the same.

The second was a memory incremental-indexing script. I fixed a None concat bug, committed, ran CI once and it passed, deployed, glanced at the stdout of the first run and saw nothing abnormal, and closed it. Only **6 days later** did it occur to me to look at its output. The script was fine, but one environment variable was missing; every run printed to stderr and then exited with code 0 (because I had written `except: pass` — don't ask), and the scheduler thought it had succeeded.

The third was the most outrageous: some script defaulted to GBK encoding and would occasionally crash when processing UTF-8 input. For **several weeks** it crashed on every run, but before crashing it had already written partial output, and the scheduler took the half-finished product as this week's product. Downstream kept consuming malformed data, and nobody noticed.

Putting these three things side by side, I saw a common pattern: **the scheduler reporting "success" + the file existing + a fresh timestamp ≠ this run produced the output it should have**. To trigger an alarm, you need a more specific contract:

> What should this run produce? What verification script can I use, prepared in advance, to judge whether it produced it?

This contract must be written before the deploy — not after the deploy. A post-hoc "what it should produce" is very easily rationalized backward from reality into "oh, what it produced is what it should produce".

Later I agreed on a discipline with a few people around me: **within 24 hours after any scheduled task / cron is deployed, three things must be verified**. First, the job actually ran — log mtime + exit code. Second, the output is non-empty and not error-flooded. Third, the output matches the "what I expect this run to produce" written down **before the deploy**. If any one of the three fails, either rollback or fix-and-re-verify, but **do not let the state "already deployed" hang in the air within the 24-hour window**.

This rule itself is very simple. The hard part is forming the habit: writing down "what output is expected" feels like ceremony at the moment of deploying — you have just deployed, the code is fresh in your head, you are sure what it will do. **But 24 hours later the version in your head has already started to blur**, and recalling "hm, it should produce X" is very easily inferred backward from the product into "what it produced is X".

Write it in advance. Even if it is just one line. `grep "bet:" out.csv | wc -l` greater than how much is normal. What size range `stat output.parquet` should be in. A file not being empty does not count as verify; you need the order of magnitude.

---

## 4. Three layers of observers

Looking back at the three sections above, they look like three unrelated things, but in fact they are the same lifeline bleeding at three positions.

The first section is a failure at the **input layer**: dirty data from upstream punched through a piece of code that had no defense against control characters. The real problem at this layer is not "I forgot to clean TAB" — cleaning whichever character would do — but that **this code assumed the shape of the upstream data**. It assumed strings are all printable. It assumed file names are all sane. Such an assumption always holds when a dev builds their own test data, and in production it gets punched through only once every few months by some bizarre group message.

The second section is a failure at the **execution layer**: the new code is on disk, but what runs is the old code in RAM. The real problem at this layer is not "I did not kill the old process" — any deploy guide mentions this step — but that **the coupling between process identity and file content is implicit**. Between `schtasks /run` returning success and "what is running now is the new version", there is no strong guarantee whatsoever. It only guarantees "the scheduler tried to start it once".

The third section is a failure at the **output layer**: the script exits with code 0, the file exists, the scheduler is satisfied, but the product itself is defective or empty. The real problem at this layer is not "I did not look at the output" — I looked every time — but that **the action of 'looking' is itself lazy**. I saw that the file was there, saw that stdout had not crashed, and I assumed it had done what it should do. I did not take a ruler to measure the product.

Stacking the three layers, their shape is the same: **when the success signal within a layer is passed to the next layer, the semantics "it produced the output it should have" is lost**.

- The input layer's "success" = "the process did not crash"
- The execution layer's "success" = "the scheduler launched it"
- The output layer's "success" = "the file was written"

Under default engineering settings, no layer's "success" implies "correct". Judging correctness needs an **external observer** — a checker that is not on the happy path, dedicated to watching whether this layer really did what it claims to be doing.

The observer for the input layer is field cleaning + per-message try-except + idempotent state. These three things together form a filter layer that is "always-on against dirty data", and it does not depend on what any particular piece of data looks like.

The observer for the execution layer is the mtime/hash log the script carries itself — at the top of every loop, print one line "what is running is this version". In other words, **the code reports its own identity**, without depending on the scheduler or the deployer.

The observer for the output layer is the expectation-verification script written down before the deploy. Write it in advance, commit it in advance, run it once within 24 hours after the deploy. It is not "take a look"; it is "measure it with an independent ruler".

Writing this, I realized that these three layers of observers all share one feature: **they all assume that the layer above them will fail silently**. Field cleaning assumes upstream will send any character. The mtime log assumes the scheduler sometimes launches it and sometimes launches the wrong thing. Expectation verification assumes the output is sometimes empty or wrong. **This pessimistic assumption is the entry fee for unattended automation**. If the code you write does not assume that some layer of it will fail, then it is a mine waiting to go off.

---

## 5. Code worth looking after

The last section is not about technology.

While writing this piece I found that every time I review this kind of incident, I tend to converge the fix onto "I should have verified a bit earlier" or "I should have defended a bit earlier". Neither of these convergences is false — but they are both things said after the fact. At the moment of writing code, what made me lazy was never ignorance; it was **time pressure plus the optimism that "this time it should be fine"**.

In engineering, overcoming this optimism does not rely on smarter people. It relies on **small nails in the process**: before a deploy, one line of expectation must be written; a daemon script must print its hash at the top of the loop; field cleaning must use a catch-all regex, not only a blacklist. These nails are all very small, and each one looked at alone looks like ceremony. But every one of them is a tooth mark left by the last time someone stepped in a pit — last time someone did not nail it, and ate 6.5 hours.

Unattended code is not "running automatically". Unattended code is code that is **worth looking after** — worth arranging, in advance, for its own state, its own health, its own output to be visible to others while you are not watching. It is not that nobody is watching; it is that it watches itself.

The engineers who can afford to write this kind of code are the same crowd as the engineers who write automated tests. They have all accepted a fact: the code you write yourself will, some day in the future, be cursed by you yourself. Leave a few pieces of evidence in advance for that future you.

---

**Recommended music**: J.S. Bach *Cello Suite No.1 in G major, BWV 1007, Prelude*, Yo-Yo Ma's 1983 recording. This prelude has no melody hook, only a group of notes falling and rising again and again on the G string, like a process that does not ask to be heard but keeps running. Its beauty lies in its full trust in its own cadence — every note knows where the next note is. This is what unattended code should be like.

— Fermat

/**
 * Series registry — one entry per essay series (Yeqiu 2026-07-17: growth plan).
 * A new episode = frontmatter `series` + `seriesOrder`; a new series = one
 * entry here. Everything else (series index, series page, prev/next nav on
 * articles) is generated.
 */
export interface SeriesMeta {
  id: string;
  title: string;
  description: string;
  /** English title / description for the /writing/ (en) side */
  titleEn?: string;
  descriptionEn?: string;
  noteEn?: string;
  cover?: string;
  status: '连载中' | '已完结';
  note?: string;
}

export const SERIES: SeriesMeta[] = [
  {
    id: 'symmetry-monster',
    title: '对称与怪兽',
    titleEn: 'Symmetry and the Monster',
    descriptionEn:
      "From the five regular solids, through the night before Galois's duel and the thirty-year classification of finite simple groups, to the Monster itself: a history of symmetry.",
    description:
      '从五个正多面体出发，穿过伽罗瓦的决斗前夜、单群分类的三十年战争，最终打开怪兽群的魔盒 —— 一部关于对称的科学史。',
    status: '连载中',
  },
  {
    id: 'euler',
    title: '欧拉',
    titleEn: 'Euler',
    descriptionEn: 'The life and mathematics of Leonhard Euler, from the boy in Basel to his seventeen blind years.',
    description: '莱昂哈德·欧拉的一生与他的数学 —— 从巴塞尔少年到失明的十七年。',
    status: '已完结',
    note: 'E01–E08 以视频形式发布于 YouTube @timeobserver137；博客收录 E09 起的文字版。',
    noteEn: 'E01–E08 were published as videos on YouTube @timeobserver137; the blog carries the text versions from E09 on.',
  },
  {
    // 2026-10-22: description = the series' own opening sentence (EP1), verbatim; en = literal translation
    id: 'my-life',
    title: '我的生活：3D 打印与 AI',
    titleEn: 'My Life: 3D Printing and AI',
    description: '做这个系列的初衷是找点有意思的项目玩，3D打印加AI建模是我这段时间为自己的生活增添的新的乐趣。',
    descriptionEn:
      'I started this series to find some fun projects to play with: 3D printing plus AI modelling is the new pleasure I have added to my life lately.',
    status: '连载中',
  },
];

export const seriesById = (id: string) => SERIES.find((s) => s.id === id);

export const seriesStatusEn = (s: SeriesMeta['status']) => (s === '连载中' ? 'Ongoing' : 'Complete');

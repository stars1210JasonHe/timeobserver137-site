/**
 * Tag display labels (2026-07-17): slugs are English (URL/taxonomy layer,
 * Yeqiu's call), but the zh reading surface shows Chinese labels. A tag
 * without an entry displays its slug as-is.
 */
export const TAG_LABELS: Record<string, string> = {
  'ai-collaboration': 'AI 合作',
  'fleet-philosophy': 'fleet 哲学',
  'multi-agent': '多智能体',
  'symmetry-monster': '对称与怪兽',
  craft: '工艺',
  'behind-the-scenes': '幕后',
  research: '研究',
  'memory-systems': '记忆系统',
  'history-of-mathematics': '数学史',
  'math-companion': '视频伴读',
  'four-color-theorem': '四色定理',
  'graph-theory': '图论',
  'number-theory': '数论',
  'galois-theory': '伽罗瓦理论',
  'celestial-mechanics': '天体力学',
  'lagrange-points': '拉格朗日点',
  'constructible-polygon': '可作图多边形',
  'fermat-primes': '费马素数',
  'mersenne-primes': '梅森素数',
  'quadratic-reciprocity': '二次互反律',
  'latin-squares': '拉丁方',
  'ai-and-math': 'AI 与数学',
  '18th-century': '十八世纪',
};

export const tagLabel = (slug: string) => TAG_LABELS[slug] ?? slug;

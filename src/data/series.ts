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
  cover?: string;
  status: '连载中' | '已完结';
  note?: string;
}

export const SERIES: SeriesMeta[] = [
  {
    id: 'symmetry-monster',
    title: '对称与怪兽',
    description:
      '从五个正多面体出发，穿过伽罗瓦的决斗前夜、单群分类的三十年战争，最终打开怪兽群的魔盒 —— 一部关于对称的科学史。',
    status: '连载中',
  },
  {
    id: 'euler',
    title: '欧拉',
    description: '莱昂哈德·欧拉的一生与他的数学 —— 从巴塞尔少年到失明的十七年。',
    status: '已完结',
    note: 'E01–E08 以视频形式发布于 YouTube @timeobserver137；博客收录 E09 起的文字版。',
  },
];

export const seriesById = (id: string) => SERIES.find((s) => s.id === id);

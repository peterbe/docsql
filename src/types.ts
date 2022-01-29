export interface Page {
  _id: string;
  _hash: string;
  //   title: string;
  [key: string]: string | number;
}

export interface Meta {
  took: number;
  rows: number;
}
export interface PagesAndMeta {
  pages: Page[];
  meta: Meta;
}

export interface SavedQuery {
  query: string;
  count: number;
  ts: number;
  star?: boolean;
}

export type Records = any[];

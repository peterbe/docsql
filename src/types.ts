export interface Page {
  _file: string;
  [key: string]: string | number;
}

export interface Source {
  source: string;
  files: number;
}

export interface Meta {
  took: number;
  rows: number;
  sources: Source[];
  version: string;
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

export interface OpenFile {
  filePath: string;
  editor?: string;
  absolutePath?: string;
  binary?: string;
  isTerminalEditor?: boolean;
  error?: string;
}

export type ToolbarMenuOption = "" | "help" | "saved" | "examples";

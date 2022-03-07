import { sep } from "path";
export default function getDepth({ _file }) {
  return { depth: _file.split(sep).length };
}

import Refractor from "react-refractor";
import sql from "refractor/lang/sql";
import "prismjs/themes/prism.css";

Refractor.registerLanguage(sql);

export function SQL({ code }: { code: string }) {
  return <Refractor language="sql" value={code} />;
}

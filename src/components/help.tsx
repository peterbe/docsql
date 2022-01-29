import type { Page } from "../types";

export function ShowHelp({ pages }: { pages: Page[] }) {
  const allKeys: {
    name: string;
    type: string;
  }[] = [];

  // Loop over all instead because the first one might not have all the keys
  Object.entries(pages[0])
    .filter(([key]) => !key.startsWith("_"))
    .forEach(([name, value]) => {
      let type: "number" | "string" | "array" | "unknown" = "unknown";
      if (typeof value === "number") {
        type = "number";
      } else if (typeof value === "string") {
        type = "string";
      } else if (Array.isArray(value)) {
        type = "array";
      } else {
        console.log(name, value);
      }

      allKeys.push({ name, type });
    });

  return (
    <div>
      <p>Possible keys</p>
      <ul>
        {allKeys.map(({ name, type }) => (
          <li key={name}>
            <code>{name}</code> <small>({type})</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

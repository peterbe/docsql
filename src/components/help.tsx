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
      <p>
        <b>Possible keys</b>
      </p>
      <ul>
        {allKeys.map(({ name, type }) => (
          <li key={name}>
            <code>{name}</code> <small>({type})</small>
          </li>
        ))}
      </ul>

      <p>
        <b>Read the docs</b>
      </p>
      <p>
        The most important documentation is{" "}
        <a
          href="https://github.com/agershun/alasql/wiki"
          target="_blank"
          rel="noopener"
        >
          AlaSQL
        </a>{" "}
        which is what the SQL engine is based on.
      </p>
      <p>
        <b>Tip!</b> Since AlaSQL is based on JavaScript you can substitute the{" "}
        <code>.</code>
        for <code>&gt;-</code>. For example, in JavaScript you would do:{" "}
        <code>myString.length.toLocaleString()</code>, and in AlaSQL that
        becomes <code>SELECT mystring-&gt;length-&gt;toLocaleString()</code>.
      </p>
    </div>
  );
}

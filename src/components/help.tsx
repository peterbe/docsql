import { Paper, Title } from "@mantine/core";
import { Container } from "@mantine/core";

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
      let type: "number" | "string" | "array" | "json" | "unknown" = "unknown";
      if (typeof value === "number") {
        type = "number";
      } else if (typeof value === "string") {
        type = "string";
      } else if (Array.isArray(value)) {
        type = "array";
      } else if (typeof value === "object") {
        type = "json";
      } else {
        console.log(name, value);
      }

      allKeys.push({ name, type });
    });

  return (
    <div>
      <Container style={{ margin: 40 }}>
        <Paper padding="md" shadow="sm" withBorder>
          <Title order={4}>Possible keys</Title>
          <ul>
            {allKeys.map(({ name, type }) => (
              <li key={name}>
                <code>{name}</code> <small>({type})</small>
              </li>
            ))}
          </ul>
        </Paper>
      </Container>

      <Container style={{ margin: 40 }}>
        <Paper padding="md" shadow="sm" withBorder>
          <Title order={4}>SQL is case-insensitive, but keys aren't</Title>
          <p>
            <code>SELECT title FROM ? ORDER BY textLength LIMIT 10</code>
            <br />
            <b style={{ paddingLeft: 170 }}>==</b>
            <br />
            <code>Select title from ? order bY textLength limiT 10</code>
          </p>
          <p>
            <b>But...</b>
            <br />
            <code>SELECT title FROM ? ORDER BY textLength LIMIT 10</code>
            <br />
            <b style={{ paddingLeft: 170, color: "red" }}>!=</b>
            <br />
            <code>SELECT TiTLe FROM ? ORDER BY TextlengTH LIMIT 10</code>
          </p>
        </Paper>
      </Container>

      <Container style={{ margin: 40 }}>
        <Paper padding="md" shadow="sm" withBorder>
          <Title order={4}>Read the docs</Title>
          <p>
            The most important documentation is{" "}
            <a
              href="https://github.com/agershun/alasql/wiki"
              target="_blank"
              rel="noreferrer"
            >
              AlaSQL
            </a>{" "}
            which is what the SQL engine is based on.
          </p>
          <p>
            <b>Tip!</b> Since AlaSQL is based on JavaScript you can substitute
            the <code>.</code>
            for <code>-&gt;</code>. For example, in JavaScript you would do:{" "}
            <code>myString.length.toLocaleString()</code>, and in AlaSQL that
            becomes <code>SELECT mystring-&gt;length-&gt;toLocaleString()</code>
            .
          </p>
        </Paper>
      </Container>
    </div>
  );
}

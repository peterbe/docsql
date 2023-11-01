import { Anchor, Container, Paper, Table, Title } from "@mantine/core";

import type { PossibleKeys } from "../contexts/possible-keys";

export function ShowHelp({ possibleKeys }: { possibleKeys: PossibleKeys }) {
  const allKeys: {
    name: string;
    type: string;
  }[] = [];

  for (const [name, type] of Array.from(possibleKeys)) {
    allKeys.push({ name, type });
  }
  allKeys.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <Container style={{ margin: 40 }}>
        <Paper p="md" shadow="sm" withBorder>
          <Title order={4}>Possible keys</Title>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Name</Table.Th>
                <Table.Th>Type</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {allKeys.map(({ name, type }) => (
                <Table.Tr key={name}>
                  <Table.Td>
                    <code>{name}</code>
                  </Table.Td>
                  <Table.Td>{type}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </Container>

      <Container style={{ margin: 40 }}>
        <Paper p="md" shadow="sm" withBorder>
          <Title order={4}>SQL is case-insensitive, but keys aren&apos;t</Title>
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
        <Paper p="md" shadow="sm" withBorder>
          <Title order={4}>Read the docs</Title>
          <p>
            The most important documentation is{" "}
            <Anchor
              href="https://github.com/agershun/alasql/wiki"
              target="_blank"
              rel="noreferrer"
            >
              AlaSQL
            </Anchor>{" "}
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

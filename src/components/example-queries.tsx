import { useState } from "react";
import { Button, Highlight, TextInput, Grid } from "@mantine/core";
import { SQL } from "../utils/syntax-highlighter";
import styles from "../styles/example-queries.module.css";

const EXAMPLES = [
  { sql: "SELECT title FROM ?", description: "Select just 'title'" },
  {
    sql: "SELECT title FROM ? LIMIT 10 OFFSET 10",
    description: "Select first rows 10 to 20 ",
  },
  {
    sql: "SELECT title, length(title) FROM ? ORDER BY 2 DESC LIMIT 5",
    description: "Top 5 longest titles",
  },
  {
    sql: "SELECT title, title->length as length FROM ? ORDER BY 2 ASC LIMIT 5",
    description: "Top 5 shortest titles",
  },
  {
    sql: 'SELECT topics, topics->length AS count FROM ? WHERE "Accounts" IN topics',
    description:
      "Filter by presence inside an array and count entries in array",
  },
  {
    sql: 'SELECT title FROM ? WHERE title ILIKE "%github%"',
    description: "Case insensitive filter by wildcard operator on string",
  },
  {
    sql: "SELECT changelog, changelog->label FROM ? WHERE changelog AND changelog->label",
    description:
      "Select from JSON object and filter by those that have a truthy value on that key",
  },
  {
    sql: "SELECT topics, topics->length FROM ? WHERE topics->label",
    description: "Select arrays and filter out those that are null",
  },
  {
    sql: "SELECT children->(0) FROM ? WHERE children->length",
    description: "Select first element in array where the array is something",
  },
  {
    sql: "SELECT changelog FROM ? WHERE NOT changelog->label",
    description:
      "Select from JSON objects those that do not have a certain key",
  },
  {
    sql: "SELECT title FROM ? ORDER BY RANDOM() LIMIT 10",
    description: "10 random titles",
  },
  {
    sql:
      "SELECT _id, wordCount, textLength, ROUND(textLength / wordCount, 2) FROM ? WHERE wordCount > 10 " +
      "ORDER BY 4 DESC LIMIT 25",
    description: "Order average longest words rounded to 2 significant figures",
  },
];

export function ExampleQueries({
  loadQuery,
}: {
  loadQuery: (s: string) => void;
}) {
  const [search, setSearch] = useState("");

  const examples = EXAMPLES.filter(({ sql, description }) => {
    if (search.trim()) {
      return (
        sql.toLowerCase().includes(search.toLowerCase()) ||
        description.toLowerCase().includes(search.toLowerCase())
      );
    }
    return true;
  });
  return (
    <div>
      <Grid>
        <Grid.Col span={6}>
          <form>
            <TextInput
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              // label="Search"
              placeholder="Search..."
            />
          </form>
        </Grid.Col>
        <Grid.Col span={6}>
          <p>
            <small>
              These are static examples they might not work with <i>your</i>{" "}
              data.
            </small>
          </p>
        </Grid.Col>
      </Grid>

      {examples.map(({ sql, description }, i) => {
        return (
          <div key={i} className={styles.example}>
            <Highlight highlight={search.split(/\s+/)}>{description}</Highlight>
            <SQL code={sql} />{" "}
            <Button
              size="xs"
              color="success"
              type="button"
              onClick={() => {
                loadQuery(sql);
              }}
            >
              Load SQL
            </Button>
          </div>
        );
      })}
      {examples.length === 0 && (
        <p>
          <i>No examples found</i>
        </p>
      )}
    </div>
  );
}

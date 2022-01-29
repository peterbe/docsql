import type { Page } from "../types";

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
];

export function ExampleQueries({
  loadQuery,
}: {
  loadQuery: (s: string) => void;
}) {
  return (
    <div>
      <p>Example queries</p>
      <p>
        <small>
          These are static examples they might not work with <i>your</i> data.
        </small>
      </p>
      {EXAMPLES.map(({ sql, description }, i) => {
        return (
          <div key={i}>
            <p>{description}</p>
            <pre>{sql}</pre>
            <button
              type="button"
              onClick={() => {
                loadQuery(sql);
              }}
            >
              Load SQL
            </button>
          </div>
        );
      })}
    </div>
  );
}

import type { SavedQuery } from "../types";

export function ShowSavedQueries({
  savedQueries,
  loadSavedQuery,
}: {
  savedQueries: SavedQuery[];
  loadSavedQuery: (s: string) => void;
}) {
  return (
    <div>
      <p>Saved queries</p>
      <table>
        <thead>
          <tr>
            <th>Query</th>
            <th>Count</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {savedQueries.map((savedQuery) => {
            return (
              <tr key={savedQuery.query + savedQuery.count + savedQuery.ts}>
                <td>
                  <pre
                    onClick={() => {
                      loadSavedQuery(savedQuery.query);
                    }}
                  >
                    {savedQuery.query}
                  </pre>
                </td>
                <td>
                  <pre>{savedQuery.count}</pre>
                </td>
                <td>
                  <pre>{new Date(savedQuery.ts).toLocaleTimeString()}</pre>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

import type { SavedQuery } from "../types";

export function ShowSavedQueries({
  savedQueries,
  loadQuery,
  deleteSavedQuery,
}: {
  savedQueries: SavedQuery[];
  loadQuery: (s: string) => void;
  deleteSavedQuery: (s: string) => void;
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
                      loadQuery(savedQuery.query);
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
                <td>
                  <button
                    type="button"
                    title="Delete saved query"
                    onClick={() => {
                      deleteSavedQuery(savedQuery.query);
                    }}
                  >
                    🗑
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

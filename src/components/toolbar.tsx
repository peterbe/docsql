import { useState } from "react";

import type { Page, SavedQuery } from "../types";
import { ShowHelp } from "./help";
import { ShowSavedQueries } from "./saved-queries";
import { ExampleQueries } from "./example-queries";

type OpenOptions = "help" | "saved" | "example_queries" | "";
export function Toolbar({
  pages,
  savedQueries,
  loadQuery,
  deleteSavedQuery,
}: {
  pages: Page[];
  savedQueries: SavedQuery[];
  loadQuery: (query: string) => void;
  deleteSavedQuery: (query: string) => void;
}) {
  const [open, setOpen] = useState<OpenOptions>("");

  function toggle(key: OpenOptions) {
    setOpen((prevState) => {
      return prevState === key ? "" : key;
    });
  }

  return (
    <div>
      <p>
        <button type="button" onClick={() => toggle("help")}>
          {open.includes("help") ? "Close help" : "Open help"}
        </button>

        <button type="button" onClick={() => toggle("saved")}>
          {open.includes("saved")
            ? "Close saved queries"
            : `Open saved queries (${savedQueries.length})`}
        </button>

        <button type="button" onClick={() => toggle("example_queries")}>
          {open.includes("example_queries")
            ? "Close example queries"
            : `Open example queries`}
        </button>
      </p>

      {open === "help" && <ShowHelp pages={pages} />}
      {open === "saved" && (
        <ShowSavedQueries
          savedQueries={savedQueries}
          loadQuery={(query: string) => {
            loadQuery(query);
            setOpen("");
          }}
          deleteSavedQuery={(query: string) => {
            deleteSavedQuery(query);
          }}
        />
      )}
      {open === "example_queries" && (
        <ExampleQueries
          loadQuery={(query: string) => {
            loadQuery(query);
            setOpen("");
          }}
        />
      )}
    </div>
  );
}

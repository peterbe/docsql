import { useState } from "react";

import type { Page, SavedQuery } from "../types";
import { ShowHelp } from "./help";
import { ShowSavedQueries } from "./saved-queries";

export function Toolbar({
  pages,
  savedQueries,
  loadSavedQuery,
}: {
  pages: Page[];
  savedQueries: SavedQuery[];
  loadSavedQuery: (query: string) => void;
}) {
  const [open, setOpen] = useState<"help" | "saved" | "">("");

  return (
    <div>
      <p>
        <button
          type="button"
          onClick={() => {
            setOpen((prevState) => {
              return prevState === "help" ? "" : "help";
            });
          }}
        >
          {open.includes("help") ? "Close help" : "Open help"}
        </button>

        <button
          type="button"
          onClick={() => {
            setOpen((prevState) => {
              return prevState === "saved" ? "" : "saved";
            });
          }}
        >
          {open.includes("saved")
            ? "Close saved queries"
            : `Open saved queries (${savedQueries.length})`}
        </button>
      </p>

      {open === "help" && <ShowHelp pages={pages} />}
      {open === "saved" && (
        <ShowSavedQueries
          savedQueries={savedQueries}
          loadSavedQuery={(query: string) => {
            loadSavedQuery(query);
            setOpen("");
          }}
        />
      )}
    </div>
  );
}

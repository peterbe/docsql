import { useState } from "react";
import { Group, Button } from "@mantine/core";

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
  starQuery,
}: {
  pages: Page[];
  savedQueries: SavedQuery[];
  loadQuery: (query: string) => void;
  deleteSavedQuery: (query: string) => void;
  starQuery: (query: string) => void;
}) {
  const [open, setOpen] = useState<OpenOptions>("");

  function toggle(key: OpenOptions) {
    setOpen((prevState) => {
      return prevState === key ? "" : key;
    });
  }

  return (
    <div>
      <Group>
        <Button
          type="button"
          onClick={() => toggle("help")}
          size="sm"
          color="secondary"
        >
          {open.includes("help") ? "Close help" : "Open help"}
        </Button>

        <Button
          type="button"
          onClick={() => toggle("saved")}
          size="sm"
          color="secondary"
        >
          {open.includes("saved")
            ? "Close saved queries"
            : `Open saved queries (${savedQueries.length})`}
        </Button>

        <Button
          type="button"
          onClick={() => toggle("example_queries")}
          size="sm"
          color="secondary"
        >
          {open.includes("example_queries")
            ? "Close example queries"
            : `Open example queries`}
        </Button>
      </Group>

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
          starQuery={starQuery}
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

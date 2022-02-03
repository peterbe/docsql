import { useState } from "react";
import { Group, Button } from "@mantine/core";

import type { Page, SavedQuery } from "../types";
import { ShowHelp } from "./help";
import { ShowSavedQueries } from "./saved-queries";
import { ExampleQueries } from "./example-queries";

import type { ToolbarMenuOption } from "../types";

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
  const [open, setOpen] = useState<ToolbarMenuOption>("");

  function toggle(key: ToolbarMenuOption) {
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
          onClick={() => toggle("examples")}
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
      {open === "examples" && (
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

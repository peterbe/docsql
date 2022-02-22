import { Box } from "@mantine/core";

import type { Page, SavedQuery, ToolbarMenuOption } from "../types";
import { ShowHelp } from "./help";
import { ShowSavedQueries } from "./saved-queries";
import { ExampleQueries } from "./example-queries";

export function Toolbar({
  currentMenu,
  toggleMenu,
  pages,
  savedQueries,
  loadQuery,
  deleteSavedQuery,
  starQuery,
  deleteAllSavedQueries,
}: {
  currentMenu: ToolbarMenuOption;
  toggleMenu: (menu: ToolbarMenuOption) => void;
  pages: Page[];
  savedQueries: SavedQuery[];
  loadQuery: (query: string) => void;
  deleteSavedQuery: (query: string) => void;
  starQuery: (query: string) => void;
  deleteAllSavedQueries: (includingStarred?: boolean) => void;
}) {
  return (
    <Box>
      {currentMenu === "help" && <ShowHelp pages={pages} />}
      {currentMenu === "saved" && (
        <ShowSavedQueries
          savedQueries={savedQueries}
          loadQuery={(query: string) => {
            loadQuery(query);
            toggleMenu("");
          }}
          deleteSavedQuery={(query: string) => {
            deleteSavedQuery(query);
          }}
          starQuery={starQuery}
          deleteAllSavedQueries={deleteAllSavedQueries}
        />
      )}
      {currentMenu === "examples" && (
        <ExampleQueries
          loadQuery={(query: string) => {
            loadQuery(query);
            toggleMenu("");
          }}
        />
      )}
    </Box>
  );
}

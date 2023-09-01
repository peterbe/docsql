import { Box } from "@mantine/core";

import type { SavedQuery, ToolbarMenuOption } from "../types";
import { ShowHelp } from "./help";
import { ShowSavedQueries } from "./saved-queries";
import { ExampleQueries } from "./example-queries";
import type { PossibleKeys } from "../contexts/possible-keys";

export function Toolbar({
  currentMenu,
  toggleMenu,
  savedQueries,
  loadQuery,
  deleteSavedQuery,
  starQuery,
  deleteAllSavedQueries,
  possibleKeys,
}: {
  currentMenu: ToolbarMenuOption;
  toggleMenu: (menu: ToolbarMenuOption) => void;
  savedQueries: SavedQuery[];
  loadQuery: (query: string) => void;
  deleteSavedQuery: (query: string) => void;
  starQuery: (query: string) => void;
  deleteAllSavedQueries: (includingStarred?: boolean) => void;
  possibleKeys: PossibleKeys;
}) {
  return (
    <Box>
      {currentMenu === "help" && <ShowHelp possibleKeys={possibleKeys} />}
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

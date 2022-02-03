import { Group, Button } from "@mantine/core";

import type { ToolbarMenuOption, SavedQuery } from "../types";

export function ToolbarMenu({
  current,
  toggle,
  savedQueries,
}: {
  current: ToolbarMenuOption;
  toggle: (name: ToolbarMenuOption) => void;
  savedQueries: SavedQuery[];
}) {
  return (
    <Group>
      <Button
        type="button"
        onClick={() => toggle("help")}
        variant={current === "help" ? "filled" : "outline"}
      >
        {current === "help" ? "Close help" : "Open help"}
      </Button>

      <Button
        type="button"
        onClick={() => toggle("saved")}
        variant={current === "saved" ? "filled" : "outline"}
      >
        {current === "saved"
          ? "Close saved queries"
          : `Open saved queries (${savedQueries.length})`}
      </Button>

      <Button
        type="button"
        onClick={() => toggle("examples")}
        variant={current === "examples" ? "filled" : "outline"}
      >
        {current === "examples"
          ? "Close example queries"
          : `Open example queries`}
      </Button>
    </Group>
  );
}

import { useContext, useCallback } from "react";
import { Button, Grid, Text } from "@mantine/core";
import { Kbd } from "@mantine/core";

import styles from "../styles/code-input.module.css";

import { TextareaWithCompletion } from "./textarea-with-completion";
import { ToolbarMenu } from "./toolbar-menu";
import { SavedQuery, ToolbarMenuOption } from "../types";
import { PossibleKeysContext } from "../contexts/possible-keys";

const SQL_WORDS = new Map(
  [
    "SELECT",
    "FROM",
    "ORDER",
    "BY",
    "ASC",
    "DESC",
    "LENGTH",
    "GROUP",
    "LIMIT",
    "OFFSET",
    "WHERE",
    "LIKE",
    "ILIKE",
    "AND",
    "OR",
    "NOT",
    "RANDOM()",
  ].map((x) => [x.toLowerCase(), `${x} `])
);

export function CodeInput({
  onChange,
  query,
  prettyQuery,
  typedQuery,
  setTypedQuery,
  hasError,
  savedQueries,
  currentMenu,
  toggleMenu,
}: {
  onChange: (query: string) => void;
  query: string;
  prettyQuery: string;
  typedQuery: string;
  setTypedQuery: (query: string) => void;
  hasError: boolean;
  savedQueries: SavedQuery[];
  currentMenu: ToolbarMenuOption;
  toggleMenu: (menu: ToolbarMenuOption) => void;
}) {
  const formSubmit = useCallback(() => {
    onChange(typedQuery.trim());
  }, [typedQuery]);

  const possibleKeys = useContext(PossibleKeysContext);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        formSubmit();
      }}
    >
      <Text size="sm" align="right">
        <b>Tip!</b> Use <Kbd>⌘</Kbd>-<Kbd>Enter</Kbd> to run the query when
        focus is inside textarea
      </Text>
      <TextareaWithCompletion
        className={styles.textarea}
        spellCheck="false"
        autoFocus
        error={hasError ? "Query has error" : undefined}
        required
        rows={Math.min(100, Math.max(4, typedQuery.split("\n").length))}
        size="md"
        value={typedQuery}
        onNewValue={(newValue: string) => {
          setTypedQuery(newValue);
        }}
        onSubmit={() => {
          formSubmit();
        }}
        completionCallback={(prefix: string) => {
          const suggestions: string[] = [];
          const prefixLower = prefix.toLowerCase();
          for (const [lower, full] of Array.from(SQL_WORDS)) {
            if (lower.startsWith(prefixLower) && prefix.length < lower.length) {
              suggestions.push(full);
            }
          }
          for (const name of Array.from(possibleKeys.keys())) {
            if (
              name.toLowerCase().startsWith(prefixLower) &&
              prefix.length < name.length
            ) {
              suggestions.push(name);
            }
          }
          return suggestions;
        }}
      />

      <Grid>
        <Grid.Col span={6}>
          <Button
            type="submit"
            disabled={typedQuery.trim() === query}
            color={
              typedQuery.trim() !== query
                ? "green"
                : hasError
                ? "red"
                : undefined
            }
          >
            Run
          </Button>{" "}
          <Button
            type="button"
            variant="outline"
            disabled={!prettyQuery || prettyQuery === typedQuery}
            onClick={() => {
              setTypedQuery(prettyQuery);
              onChange(prettyQuery);
            }}
          >
            Pretty format
          </Button>
        </Grid.Col>
        <Grid.Col span={6}>
          <ToolbarMenu
            toggle={toggleMenu}
            current={currentMenu}
            savedQueries={savedQueries}
          />
        </Grid.Col>
      </Grid>
    </form>
  );
}

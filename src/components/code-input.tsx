import { useCallback, useEffect, useRef } from "react";
import { Textarea, Button, Grid, Text } from "@mantine/core";
import { Kbd } from "@mantine/core";
import styles from "../styles/code-input.module.css";

import { ToolbarMenu } from "./toolbar-menu";
import { SavedQuery, ToolbarMenuOption } from "../types";

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

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textareaElement = textareaRef.current;
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === "Enter" && event.metaKey) {
        formSubmit();
      }
    };
    if (textareaElement) textareaElement.addEventListener("keydown", listener);

    return () => {
      if (textareaElement)
        textareaElement.removeEventListener("keydown", listener);
    };
  }, [textareaElement, formSubmit]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        formSubmit();
      }}
    >
      <Text size="sm" ta="right">
        <b>Tip!</b> Use <Kbd>⌘</Kbd>-<Kbd>Enter</Kbd> to run the query when
        focus is inside textarea
      </Text>
      <Textarea
        className={styles.textarea}
        spellCheck="false"
        autoFocus
        error={hasError ? "Query has error" : undefined}
        required
        minRows={Math.min(100, Math.max(2, typedQuery.split("\n").length))}
        size="md"
        ref={textareaRef}
        value={typedQuery}
        onChange={(event) => {
          setTypedQuery(event.target.value);
        }}
        autoCorrect="off"
      >
        {query}
      </Textarea>

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

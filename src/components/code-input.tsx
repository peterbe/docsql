import { useCallback, useEffect, useRef } from "react";
import { Button, Grid, Text } from "@mantine/core";
import { Kbd } from "@mantine/core";
import styles from "../styles/code-input.module.css";

export function CodeInput({
  onChange,
  query,
  typedQuery,
  setTypedQuery,
  hasError,
}: {
  onChange: (query: string) => void;
  query: string;
  typedQuery: string;
  setTypedQuery: (query: string) => void;
  hasError: boolean;
}) {
  const formSubmit = useCallback(() => {
    onChange(typedQuery.trim());
  }, [typedQuery]);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textareaElement = textareaRef.current;
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key == "Enter" && event.metaKey) {
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
      <Text size="sm" align="right">
        <b>Tip!</b> Use <Kbd>⌘</Kbd>-<Kbd>Enter</Kbd> to run the query when
        focus is inside textarea
      </Text>
      <textarea
        className={styles.textarea}
        rows={Math.min(100, Math.max(4, typedQuery.split("\n").length))}
        ref={textareaRef}
        // cols={100}
        value={typedQuery}
        onChange={(event) => {
          setTypedQuery(event.target.value);
        }}
      >
        {query}
      </textarea>

      <Button
        size="lg"
        type="submit"
        disabled={typedQuery.trim() === query}
        color={
          typedQuery.trim() !== query ? "green" : hasError ? "red" : undefined
        }
      >
        Run
      </Button>
    </form>
  );
}

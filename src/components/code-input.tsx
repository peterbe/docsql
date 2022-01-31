import { useCallback, useEffect, useRef } from "react";
import { Grid, Button } from "@nextui-org/react";

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
      <textarea
        rows={Math.min(100, Math.max(6, typedQuery.split("\n").length))}
        ref={textareaRef}
        cols={100}
        value={typedQuery}
        onChange={(event) => {
          setTypedQuery(event.target.value);
        }}
      >
        {query}
      </textarea>

      <Grid.Container gap={2}>
        <Grid>
          <Button
            size="lg"
            type="submit"
            disabled={typedQuery.trim() === query}
            color={
              typedQuery.trim() !== query
                ? "success"
                : hasError
                ? "error"
                : undefined
            }
          >
            Run
          </Button>
        </Grid>
        <Grid>
          <small>
            <b>Tip!</b> Use <kbd>Cmd-Enter</kbd> to submit query when focus is
            inside textarea
          </small>
        </Grid>
      </Grid.Container>
    </form>
  );
}

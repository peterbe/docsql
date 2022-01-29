import { useCallback, useEffect, useState, useRef } from "react";

export function CodeInput({
  onChange,
  query,
  typedQuery,
  setTypedQuery,
}: {
  onChange: (query: string) => void;
  query: string;
  typedQuery: string;
  setTypedQuery: (query: string) => void;
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
      <br />
      <button type="submit" disabled={typedQuery.trim() === query}>
        Run
      </button>{" "}
      <small>
        <b>Tip!</b> Use <kbd>Cmd-Enter</kbd> to submit query when focus on
        textarea
      </small>
    </form>
  );
}

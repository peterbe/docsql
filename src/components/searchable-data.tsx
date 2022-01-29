import { useCallback, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import alasql from "alasql";

import type { PagesAndMeta, SavedQuery, Records } from "../types";

import { Toolbar } from "./toolbar";
import { ShowFoundRecords } from "./found-records";
import { AboutMetadata } from "./about-metadata";
import useRouterReplace from "../hooks/use-router-replace";

function firstString(thing: string[] | string) {
  if (Array.isArray(thing)) return thing[0];
  return thing;
}

const DEFAULT_QUERY =
  "SELECT title, length(title) as title_title FROM ? ORDER BY 2 DESC LIMIT 10";

export function SearchableData({ data }: { data: PagesAndMeta }) {
  const router = useRouter();

  const defaultQuery = firstString(router.query.query || "");

  const [foundRecords, setFoundRecords] = useState<Records | null>(null);
  const [queryError, setQueryError] = useState<Error | null>(null);
  const [query, setQuery] = useState(defaultQuery);
  const [typedQuery, setTypedQuery] = useState(defaultQuery || DEFAULT_QUERY);

  const { pages } = data;

  const routerReplace = useRouterReplace();
  useEffect(() => {
    if (query) {
      try {
        setFoundRecords(alasql(query, [pages]));
        setQueryError(null);
      } catch (err) {
        if (err instanceof Error) {
          setQueryError(err);
        } else {
          throw err;
        }
      }
    }
  }, [query, pages]);

  useEffect(() => {
    const [asPathRoot, asPathQuery = ""] = router.asPath.split("?");
    const params = new URLSearchParams(asPathQuery);
    if (query) {
      params.set("query", query);
      // saveQuery(query);
    } else {
      params.delete("query");
    }
    let asPath = asPathRoot;
    if (params.toString()) {
      asPath += `?${params.toString()}`;
    }
    // router.replace(asPath);
    routerReplace(asPath);
  }, [query, router.asPath, routerReplace]);

  const [savedQueries, setSavedQueries] = useState<SavedQuery[]>([]);

  useEffect(() => {
    try {
      let previous = JSON.parse(
        sessionStorage.getItem("saved_queries") || "[]"
      ) as SavedQuery[];
      if (!Array.isArray(previous)) {
        previous = [];
      }
      setSavedQueries(previous);
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        throw err;
      } else {
        console.warn("Unable to save to local storage", err);
      }
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem("saved_queries", JSON.stringify(savedQueries));
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        throw err;
      } else {
        console.warn("Unable to save to local storage", err);
      }
    }
  }, [savedQueries]);

  useEffect(() => {
    if (foundRecords) {
      setSavedQueries((prevState) => {
        if (
          prevState.length > 0 &&
          prevState[0].query === query &&
          prevState[0].count === foundRecords.length
        ) {
          return prevState;
        }
        return [
          { query, count: foundRecords.length, ts: new Date().getTime() },
          ...prevState.slice(0, 100).filter((p) => p.query !== query),
        ];
      });
    }
  }, [query, foundRecords]);

  const formSubmit = useCallback(() => {
    setQuery(typedQuery.trim());
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
      <p>
        {queryError ? (
          <code style={{ color: "red" }}>{queryError.toString()}</code>
        ) : (
          <code></code>
        )}
      </p>
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
      <Toolbar
        pages={data.pages}
        savedQueries={savedQueries}
        loadQuery={(query: string) => {
          setTypedQuery(query);
          setQuery(query.trim());
        }}
        deleteSavedQuery={(query: string) => {
          setSavedQueries((prevState) => [
            ...prevState.filter((p) => p.query !== query),
          ]);

          if (typedQuery === query) {
            setTypedQuery("");
          }
        }}
      />
      {foundRecords !== null && <ShowFoundRecords records={foundRecords} />}
      <AboutMetadata meta={data.meta} />
    </form>
  );
}

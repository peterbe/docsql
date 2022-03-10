import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import alasql from "alasql";
import { Alert } from "@mantine/core";

import type {
  PagesAndMeta,
  SavedQuery,
  Records,
  ToolbarMenuOption,
} from "../types";

import { Toolbar } from "./toolbar";
import { ShowFoundRecords } from "./found-records";
import { AboutMetadata } from "./about-metadata";
import useRouterReplace from "../hooks/use-router-replace";
import { CodeInput } from "./code-input";
import {
  pagesToPossibleKeys,
  PossibleKeysContext,
} from "../contexts/possible-keys";

function firstString(thing: string[] | string) {
  if (Array.isArray(thing)) return thing[0];
  return thing;
}

function fixDoubleAliases(sql: string): string {
  // Necessary because of https://github.com/agershun/alasql/issues/1426
  const dupes = new Set<string>();
  for (const match of sql.match(/\sAS \w+/g) || []) {
    if (dupes.has(match)) {
      sql = sql.replace(match, "");
    }
    dupes.add(match);
  }
  return sql;
}

const DEFAULT_QUERY =
  "SELECT title, length(title) AS length FROM ? ORDER BY 2 DESC LIMIT 10";

export function SearchableData({ data }: { data: PagesAndMeta }) {
  const router = useRouter();

  const defaultQuery = firstString(router.query.query || "");

  const [foundRecords, setFoundRecords] = useState<Records | null>(null);
  const [queryError, setQueryError] = useState<Error | null>(null);

  const [query, setQuery] = useState(defaultQuery);

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

  const [possiblePrettySQL, setPossiblePrettySQL] = useState("");
  useEffect(() => {
    if (query) {
      try {
        const ast = alasql.parse(query);
        const pretty = fixDoubleAliases(
          ast.toString().replace("FROM $0 AS default", "FROM ?")
        );
        if (pretty !== query) {
          setPossiblePrettySQL(pretty);
        }
      } catch {
        // Deliberately do nothing because nothing good can come out
        // of prettying a broken query.
        setPossiblePrettySQL("");
      }
    }
  }, [query]);

  const asPath = router.asPath;
  useEffect(() => {
    const [asPathRoot, asPathQuery = ""] = asPath.split("?");
    const params = new URLSearchParams(asPathQuery);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    let asPathNew = asPathRoot;
    if (params.toString()) {
      asPathNew += `?${params.toString()}`;
    }

    if (asPathNew !== asPath) {
      routerReplace(asPathNew);
    }
  }, [query, asPath, routerReplace]);

  const [savedQueries, setSavedQueries] = useState<SavedQuery[]>([]);

  useEffect(() => {
    const storage =
      process.env.NODE_ENV === "development" ? sessionStorage : localStorage;
    try {
      let previous = JSON.parse(
        storage.getItem("saved_queries") || "[]"
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
    if (!defaultQuery) {
      if (savedQueries.length) {
        // Use the most recently used one
        setQuery(savedQueries[0].query);
      } else {
        setQuery(DEFAULT_QUERY);
      }
    }
  }, [defaultQuery, savedQueries]);

  useEffect(() => {
    const storage =
      process.env.NODE_ENV === "development" ? sessionStorage : localStorage;
    try {
      storage.setItem(
        "saved_queries",
        JSON.stringify(
          savedQueries.sort(
            (a, b) => Number(Boolean(b.star)) - Number(Boolean(a.star))
          )
        )
      );
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        throw err;
      } else {
        console.warn("Unable to save to local storage", err);
      }
    }
  }, [savedQueries]);

  useEffect(() => {
    if (queryError) {
      setSavedQueries((prevState) => {
        return prevState.filter((entry) => entry.query != query);
      });
    } else if (foundRecords) {
      setSavedQueries((prevState) => {
        if (
          prevState.length > 0 &&
          prevState[0].query === query &&
          prevState[0].count === foundRecords.length
        ) {
          return prevState;
        }
        const keepQueries: SavedQuery[] = [];
        // Can't just .slice() we because we want to make sure we don't delete
        // those that are starred
        const max = 50;
        prevState.forEach((old, i) => {
          if (old.query === query) return;
          if (i > max && !old.star) return;
          keepQueries.push(old);
        });

        return [
          { query, count: foundRecords.length, ts: new Date().getTime() },
          ...keepQueries,
        ];
      });
    }
  }, [query, foundRecords, queryError]);

  const [currentMenu, setCurrentMenu] = useState<ToolbarMenuOption>("");

  function toggleMenu(key: ToolbarMenuOption) {
    setCurrentMenu((prevState) => {
      return prevState === key ? "" : key;
    });
  }

  const possibleKeys = pagesToPossibleKeys(data.pages);

  return (
    <div>
      {queryError && (
        <Alert title="Query error" color="red" radius="md">
          <code>{queryError.toString()}</code>
        </Alert>
      )}
      <PossibleKeysContext.Provider value={possibleKeys}>
        <CodeInputAndToolbar
          query={query}
          setQuery={setQuery}
          prettyQuery={possiblePrettySQL}
          queryError={queryError}
          savedQueries={savedQueries}
          deleteSavedQuery={(query: string) => {
            setSavedQueries((prevState) => [
              ...prevState.filter((p) => p.query !== query),
            ]);
          }}
          starQuery={(query: string) => {
            setSavedQueries((prevState) => [
              ...prevState.map((p) => {
                if (p.query === query) {
                  return Object.assign({}, p, { star: !Boolean(p.star) });
                } else {
                  return Object.assign({}, p);
                }
              }),
            ]);
          }}
          currentMenu={currentMenu}
          toggleMenu={toggleMenu}
          deleteAllSavedQueries={(includeStarred = false) => {
            setSavedQueries((prevState) =>
              prevState.filter((entry) => {
                return !includeStarred && entry.star;
              })
            );
          }}
        />
      </PossibleKeysContext.Provider>
      {foundRecords !== null && currentMenu === "" && (
        <ShowFoundRecords records={foundRecords} />
      )}
      <AboutMetadata meta={data.meta} />
    </div>
  );
}

function CodeInputAndToolbar({
  query,
  setQuery,
  prettyQuery,
  queryError,
  savedQueries,
  deleteSavedQuery,
  starQuery,
  currentMenu,
  toggleMenu,
  deleteAllSavedQueries,
}: {
  query: string;
  setQuery: (x: string) => void;
  prettyQuery: string;
  queryError: Error | null;
  savedQueries: SavedQuery[];
  deleteSavedQuery: (query: string) => void;
  starQuery: (query: string) => void;
  currentMenu: ToolbarMenuOption;
  toggleMenu: (menu: ToolbarMenuOption) => void;
  deleteAllSavedQueries: (includingStarred?: boolean) => void;
}) {
  const [typedQuery, setTypedQuery] = useState("");

  useEffect(() => {
    if (query) {
      setTypedQuery(query);
    }
  }, [query]);

  return (
    <div>
      <CodeInput
        query={query}
        typedQuery={typedQuery}
        prettyQuery={prettyQuery}
        setTypedQuery={setTypedQuery}
        onChange={(value: string) => {
          setQuery(value.trim());
          toggleMenu("");
        }}
        hasError={Boolean(queryError)}
        savedQueries={savedQueries}
        currentMenu={currentMenu}
        toggleMenu={toggleMenu}
      />
      <Toolbar
        currentMenu={currentMenu}
        toggleMenu={toggleMenu}
        savedQueries={savedQueries}
        loadQuery={(query: string) => {
          setTypedQuery(query);
          setQuery(query.trim());
        }}
        deleteSavedQuery={(query: string) => {
          deleteSavedQuery(query);

          if (typedQuery === query) {
            setTypedQuery("");
          }
        }}
        starQuery={starQuery}
        deleteAllSavedQueries={deleteAllSavedQueries}
      />
    </div>
  );
}

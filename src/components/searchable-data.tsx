import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import alasql from "alasql";
import { Card, Text } from "@nextui-org/react";

import type { PagesAndMeta, SavedQuery, Records } from "../types";

import { Toolbar } from "./toolbar";
import { ShowFoundRecords } from "./found-records";
import { AboutMetadata } from "./about-metadata";
import useRouterReplace from "../hooks/use-router-replace";
import { CodeInput } from "./code-input";

function firstString(thing: string[] | string) {
  if (Array.isArray(thing)) return thing[0];
  return thing;
}

const DEFAULT_QUERY =
  "SELECT title, length(title) as title_title FROM ? ORDER BY 2 DESC LIMIT 10";

export function SearchableData({ data }: { data: PagesAndMeta }) {
  const router = useRouter();

  const defaultQuery = firstString(router.query.query || DEFAULT_QUERY);

  const [foundRecords, setFoundRecords] = useState<Records | null>(null);
  const [queryError, setQueryError] = useState<Error | null>(null);

  const [query, setQuery] = useState(defaultQuery);
  const [typedQuery, setTypedQuery] = useState(query);

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
    } else {
      params.delete("query");
    }
    let asPath = asPathRoot;
    if (params.toString()) {
      asPath += `?${params.toString()}`;
    }
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
      sessionStorage.setItem(
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
    if (foundRecords) {
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
  }, [query, foundRecords]);

  return (
    <div>
      {queryError && (
        <Card color="error">
          <Text
            css={{ fontWeight: "$bold", color: "$white" }}
            transform="capitalize"
          >
            Query error
          </Text>
          <code style={{ color: "red" }}>{queryError.toString()}</code>
        </Card>
      )}
      <CodeInput
        query={query}
        typedQuery={typedQuery}
        setTypedQuery={setTypedQuery}
        onChange={(value: string) => {
          setQuery(value.trim());
        }}
        hasError={Boolean(queryError)}
      />
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
      />
      {foundRecords !== null && <ShowFoundRecords records={foundRecords} />}
      <AboutMetadata meta={data.meta} />
    </div>
  );
}

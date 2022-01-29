import { Button, Grid } from "@nextui-org/react";
import { Star } from "react-iconly";

import { SQL } from "../utils/syntax-highlighter";
import type { SavedQuery } from "../types";

import styles from "../styles/saved-queries.module.css";

export function ShowSavedQueries({
  savedQueries,
  loadQuery,
  deleteSavedQuery,
  starQuery,
}: {
  savedQueries: SavedQuery[];
  loadQuery: (s: string) => void;
  deleteSavedQuery: (s: string) => void;
  starQuery: (s: string) => void;
}) {
  return (
    <div>
      <p>Saved queries</p>

      {savedQueries.map((savedQuery) => {
        const star = Boolean(savedQuery.star);
        return (
          <div
            className={styles.saved_query}
            key={savedQuery.query + savedQuery.count + savedQuery.ts}
          >
            <p>
              Found <b>{savedQuery.count} records</b>{" "}
              {new Date(savedQuery.ts).toLocaleTimeString()}
            </p>
            <SQL code={savedQuery.query} />
            <Grid.Container gap={2}>
              <Grid>
                <Button
                  type="button"
                  color="success"
                  onClick={() => {
                    loadQuery(savedQuery.query);
                  }}
                >
                  Load
                </Button>
              </Grid>

              <Grid>
                {/* <Star /> */}
                <Button
                  title="Don't let it drop off"
                  icon={
                    <Star
                      filled={star}
                      primaryColor={star ? "yellow" : "white"}
                    />
                  }
                  onClick={() => {
                    starQuery(savedQuery.query);
                  }}
                />
                {/* <Button
                  type="button"
                  color="error"
                  size="xs"
                  title="Delete saved query"
                  onClick={() => {
                    deleteSavedQuery(savedQuery.query);
                  }}
                >
                  Delete
                </Button> */}
              </Grid>

              <Grid>
                <Button
                  type="button"
                  color="error"
                  title="Delete saved query"
                  onClick={() => {
                    deleteSavedQuery(savedQuery.query);
                  }}
                >
                  Delete
                </Button>
              </Grid>
            </Grid.Container>
          </div>
        );
      })}
    </div>
  );
}

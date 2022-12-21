import { useState } from "react";
import { Title, Button, Group, TextInput, Text } from "@mantine/core";
import { Star, Search } from "react-iconly";

import { SQL } from "../utils/syntax-highlighter";
import type { SavedQuery } from "../types";

import styles from "../styles/saved-queries.module.css";

export function ShowSavedQueries({
  savedQueries,
  loadQuery,
  deleteSavedQuery,
  starQuery,
  deleteAllSavedQueries,
}: {
  savedQueries: SavedQuery[];
  loadQuery: (s: string) => void;
  deleteSavedQuery: (s: string) => void;
  starQuery: (s: string) => void;
  deleteAllSavedQueries: (includingStarred?: boolean) => void;
}) {
  const [searchFilter, setSearchFilter] = useState("");

  const filteredSavedQueries = savedQueries.filter((savedQuery) => {
    return (
      !searchFilter.trim() ||
      savedQuery.query.toLowerCase().includes(searchFilter.toLowerCase().trim())
    );
  });

  return (
    <div style={{ marginTop: 50 }}>
      <Title order={4}>Saved queries</Title>

      {savedQueries.length > 1 && (
        <form>
          <TextInput
            placeholder="Search filter..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            icon={<Search size={14} />}
          />
          {searchFilter.trim() && (
            <div>
              <Text fz="sm">
                Found {filteredSavedQueries.length}. Filtered out{" "}
                {filteredSavedQueries.length > 0
                  ? savedQueries.length - filteredSavedQueries.length
                  : "everything"}
              </Text>
            </div>
          )}
        </form>
      )}

      {filteredSavedQueries.map((savedQuery) => {
        const star = Boolean(savedQuery.star);
        return (
          <div
            className={styles.saved_query}
            key={savedQuery.query + savedQuery.count + savedQuery.ts}
          >
            <p>
              Found <b>{savedQuery.count.toLocaleString()} records</b>{" "}
              {new Date(savedQuery.ts).toLocaleTimeString()}
            </p>
            <SQL code={savedQuery.query} />
            <Group>
              <Button
                type="button"
                color="green"
                onClick={() => {
                  loadQuery(savedQuery.query);
                }}
              >
                Load
              </Button>
              <Button
                title="Don't let it drop off"
                onClick={() => {
                  starQuery(savedQuery.query);
                }}
              >
                <Star filled={star} primaryColor={star ? "yellow" : "white"} />
              </Button>
              <Button
                type="button"
                color="red"
                title="Delete saved query"
                onClick={() => {
                  deleteSavedQuery(savedQuery.query);
                }}
              >
                Delete
              </Button>
            </Group>
          </div>
        );
      })}
      {savedQueries.length > 1 && (
        <Group style={{ marginTop: 50 }}>
          <Button
            type="button"
            variant="outline"
            color="red"
            title="Click to delete all saved queries except those starred"
            onClick={() => {
              deleteAllSavedQueries();
            }}
          >
            Delete un-starred saved queries
          </Button>

          <Button
            type="button"
            variant="outline"
            color="red"
            title="Click to delete ALL saved queries"
            onClick={() => {
              deleteAllSavedQueries(true);
            }}
          >
            Delete ALL saved queries
          </Button>
        </Group>
      )}
    </div>
  );
}

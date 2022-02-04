import { Alert } from "@mantine/core";
import type { Meta } from "../types";
import styles from "../styles/about-metadata.module.css";

export function AboutMetadata({ meta }: { meta: Meta }) {
  return (
    <footer className={styles.footer}>
      {meta.rows === 0 ? (
        <Alert color="red" title="Loading problem">
          No rows loaded! Something is wrong with the sources or the crawler.
        </Alert>
      ) : (
        <p>
          It took {formatMilliSeconds(meta.took)} to load{" "}
          {meta.rows.toLocaleString()} records.
        </p>
      )}
    </footer>
  );
}

function formatMilliSeconds(ms: number) {
  if (ms > 1000) {
    return `${(ms / 1000).toFixed(2)} s`;
  }
  return `${ms.toFixed(0)} ms`;
}

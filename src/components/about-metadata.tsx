import { useState } from "react";
import { Alert } from "@mantine/core";
import type { Meta } from "../types";
import styles from "../styles/about-metadata.module.css";

export function AboutMetadata({ meta }: { meta: Meta }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <footer className={styles.footer}>
      {meta.rows === 0 ? (
        <Alert color="red" title="Loading problem">
          No rows loaded! Something is wrong with the sources or the crawler.
        </Alert>
      ) : (
        <>
          <p>
            It took {formatMilliSeconds(meta.took)} to load{" "}
            {meta.rows.toLocaleString()} records.{" "}
            <a
              href="#more"
              className={styles.more_meta}
              onClick={(event) => {
                event.preventDefault();
                setShowMore((prevState) => !prevState);
              }}
            >
              [{showMore ? "less" : "more"}]
            </a>
          </p>
          {showMore && (
            <div>
              <p>
                <b>Sources</b>
              </p>
              <ul>
                {meta.sources.map((source) => (
                  <li key={source.source}>
                    {source.files.toLocaleString()} files from{" "}
                    <i>{source.source}</i>
                  </li>
                ))}
              </ul>
              {meta.version && (
                <p>
                  <b>docsQL version</b> {meta.version}
                </p>
              )}
            </div>
          )}
        </>
      )}
    </footer>
  );
}

function formatMilliSeconds(ms: number) {
  if (ms > 1000) {
    return `${(ms / 1000).toFixed(2)}s`;
  }
  return `${ms.toFixed(0)}ms`;
}

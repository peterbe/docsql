import type { Meta } from "../types";
import styles from "../styles/about-metadata.module.css";

export function AboutMetadata({ meta }: { meta: Meta }) {
  return (
    <footer className={styles.footer}>
      <p>
        It took {formatMilliSeconds(meta.took)} to load{" "}
        {meta.rows.toLocaleString()} records.
      </p>
    </footer>
  );
}

function formatMilliSeconds(ms: number) {
  if (ms > 1000) {
    return `${(ms / 1000).toFixed(2)} s`;
  }
  return `${ms.toFixed(0)} ms`;
}

import { Anchor, Text } from "@mantine/core";

import styles from "../styles/footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Text fz="sm">
        <Anchor
          href="https://github.com/peterbe/docsql"
          target="_blank"
          rel="noopener"
        >
          github.com/peterbe/docsql
        </Anchor>
      </Text>
    </footer>
  );
}

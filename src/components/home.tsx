import type { NextPage } from "next";
import useSWR from "swr";
import { Alert, LoadingOverlay } from "@mantine/core";

import type { PagesAndMeta } from "../types";
import { SearchableData } from "./searchable-data";
import { Footer } from "./footer";
import styles from "../styles/home.module.css";

export const Home: NextPage = () => {
  const { data, error } = useSWR<PagesAndMeta, Error>(
    "/api/traits",
    async (url) => {
      const res = await fetch(url);
      if (res.ok) {
        return await res.json();
      }
      throw new Error(`${res.status} on ${url}`);
    }
  );

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {error && (
          <Alert color="red" title="Loading error">
            <div
              className={data ? styles.reloading_error : styles.loading_error}
            >
              <code>{error.toString()}</code>
              {data && <p>Showing &quot;old&quot; data.</p>}
            </div>
          </Alert>
        )}
        {/* {!error && !data && <div>Loading</div>} */}
        {/* {!error && !data && <LoadingOverlay visible={true} />} */}
        <LoadingOverlay visible={!error && !data} transitionDuration={500} />
        {data && <SearchableData data={data} />}
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

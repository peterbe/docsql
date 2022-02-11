import type { NextPage } from "next";
import useSWR from "swr";
import { Alert, LoadingOverlay } from "@mantine/core";

import type { PagesAndMeta } from "../types";
import { SearchableData } from "./searchable-data";
import { Footer } from "./footer";
import styles from "../styles/home.module.css";

export const Home: NextPage = () => {
  const { data, error } = useSWR<PagesAndMeta, Error>(
    process.env.NODE_ENV === "development" ? "/api/docsproxy" : "/docs.json",
    async (url) => {
      const res = await fetch(url);
      if (res.ok) {
        return await res.json();
      }
      let message = `${res.status} on ${url}`;
      try {
        message = (await res.json()).error;
      } catch {}
      throw new Error(message);
    },
    {
      revalidateOnFocus: process.env.NODE_ENV === "development",
    }
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>docsQL</h1>
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
        <LoadingOverlay visible={!error && !data} transitionDuration={500} />
        {data && <SearchableData data={data} />}
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

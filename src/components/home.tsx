import type { NextPage } from "next";
import useSWR from "swr";
import { Alert, LoadingOverlay } from "@mantine/core";

import type { PagesAndMeta } from "../types";
import { SearchableData } from "./searchable-data";
import { Footer } from "./footer";
import { DemoAlert } from "./demo-alert";
import styles from "../styles/home.module.css";

let API_URL = "/docs.json";
if (process.env.NODE_ENV === "development") {
  API_URL = "/api/docsproxy";
} else if (process.env.GH_PAGES_PREFIX) {
  console.warn("Building for gh-pages so different asset prefix");
  // WHen building for GitHub Pages, every static asset sets a
  API_URL = `${process.env.GH_PAGES_PREFIX}${API_URL}`;
}

export const Home: NextPage = () => {
  const { data, error } = useSWR<PagesAndMeta, Error>(
    API_URL,
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
    <>
      <DemoAlert />
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
    </>
  );
};

import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";

import type { PagesAndMeta } from "../types";
import { SearchableData } from "./searchable-data";
import { Footer } from "./footer";
import styles from "../styles/Home.module.css";

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
      <Head>
        <title>Docs Traits</title>
        <meta
          name="description"
          content="Getting an overview of your Markdown content"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {error ? (
          <div>
            Loading error: <code>{error.toString()}</code>
          </div>
        ) : !data ? (
          <div>Loading</div>
        ) : (
          <SearchableData data={data} />
        )}
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

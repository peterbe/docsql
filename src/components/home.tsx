import type { NextPage } from "next";
// import Head from "next/head";
import useSWR from "swr";

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
      {/* <Head>
        <title>Docs Traits</title>
        <meta
          name="description"
          content="Getting an overview of your Markdown content"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className={styles.main}>
        {error && (
          <div className={data ? styles.reloading_error : styles.loading_error}>
            <p>
              <b>Loading error:</b> <code>{error.toString()}</code>
            </p>

            {data && <p>Showing &quot;old&quot; data.</p>}
          </div>
        )}
        {!error && !data && <div>Loading</div>}
        {data && <SearchableData data={data} />}
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

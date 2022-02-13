import { useEffect, useState } from "react";

import type { Records, OpenFile } from "../types";
import styles from "../styles/found-records.module.css";
import useSWR from "swr";
import { DownloadFoundRecords } from "./download-found-records";

export function ShowFoundRecords({ records }: { records: Records }) {
  const [opening, setOpening] = useState<null | string>(null);
  useEffect(() => {
    const timeout = opening
      ? setTimeout(() => {
          setOpening(null);
        }, 3000)
      : null;
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [opening]);

  const fetchURL = opening
    ? "/api/open?" + new URLSearchParams({ filePath: opening })
    : null;
  const { data: openFileResult, error: openFileError } = useSWR<OpenFile>(
    fetchURL,
    async (url) => {
      const res = await fetch(url);
      if (res.status === 404 || res.status === 400) {
        const error = (await res.json()).error as string;
        throw new Error(error);
      } else if (res.status === 200) {
        return (await res.json()) as OpenFile;
      }
      throw new Error(`${res.status} on ${url}`);
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  // console.log({ openFileResult, openFileError });

  if (records.length === 0) {
    return <p>Absolutely diddly squat found. Sorry not sorry 🙃</p>;
  }
  const keys = Object.keys(records[0]);
  const keyTemplate = keys.join("");

  const MAX_ROWS = 1000;

  return (
    <div>
      {opening && (
        <p className={styles.opening}>
          opening <code>{opening}</code>
        </p>
      )}
      {openFileResult && (
        <p className={styles.opened}>
          tried to open <code>{openFileResult.filePath}</code>
          using <code>{openFileResult.binary}</code>
          {openFileResult.isTerminalEditor && `(is terminal editor)`}
        </p>
      )}
      {openFileError && (
        <p className={styles.opened}>
          an error occurred trying to open the file:{" "}
          <code>{openFileError.toString()}</code>
        </p>
      )}

      <p>
        Found {records.length.toLocaleString()}{" "}
        {records.length > MAX_ROWS
          ? `(only showing first ${MAX_ROWS.toLocaleString()})`
          : null}
      </p>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            {keys.map((key) => {
              return <th key={key}>{key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {records.slice(0, MAX_ROWS).map((record, i) => {
            return (
              <tr
                key={`${keyTemplate}${i}`}
                id={`l${i + 1}`}
                className={styles.row}
              >
                <td className={styles.row_number}>
                  <a href={`#l${i + 1}`}>{i + 1}</a>
                </td>
                {keys.map((key) => {
                  const value = record[key];
                  return (
                    <td key={key}>
                      {key === "_file" ? (
                        <a
                          href={`#${value}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setOpening(value);
                          }}
                        >
                          <FilePath value={value} />
                        </a>
                      ) : (
                        formatValue(value)
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {records.length > 0 && <DownloadFoundRecords records={records} />}

      {records.length > MAX_ROWS && (
        <p>
          <small>
            Capped to the first <b>{MAX_ROWS.toLocaleString()} rows</b>
          </small>
        </p>
      )}
    </div>
  );
}

function FilePath({
  value,
  maxLength = 100,
}: {
  value: string;
  maxLength?: number;
}) {
  // Possibly truncate, nicely, because it can be really long
  if (value.length > maxLength) {
    const middle = Math.floor(value.length / 2);
    let left = value.slice(0, middle);
    let right = value.slice(middle);
    let padding = 1;
    while (left.length + right.length > maxLength) {
      left = value.slice(0, middle - padding);
      right = value.slice(middle + padding);
      padding++;
    }

    return (
      <abbr title={value}>
        {left}[…]{right}
      </abbr>
    );
  }
  return <span>{value}</span>;
}

function formatValue(input: any) {
  if (typeof input === "string") {
    return input;
  }
  if (input === 0) {
    return "0";
  }
  if (typeof input === "number") {
    if (input > 1000) {
      return input.toLocaleString();
    }
  }
  if (input === null) {
    return "null";
  }
  if (Array.isArray(input)) {
    // return input.join(", ");
    return JSON.stringify(input);
  }
  if (typeof input === "object") {
    return JSON.stringify(input);
  }
  if (input === undefined) {
    return <span className={styles.undefined_value}>undefined</span>;
  }
  return input.toString();
}

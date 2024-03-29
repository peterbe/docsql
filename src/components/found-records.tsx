import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { Anchor, Table } from "@mantine/core";

import type { Records, OpenFile } from "../types";
import styles from "../styles/found-records.module.css";
import useSWR from "swr";
import { DownloadFoundRecords } from "./download-found-records";

export function ShowFoundRecords({ records }: { records: Records }) {
  // Event if $EDITOR is set current server, it might not be
  // an actual local server. Opening a file in your local
  // editor only makes sense when the server is running on your laptop.
  const [allowLocalLinks, setAllowLocalLinks] = useState(false);
  useEffect(() => {
    const { hostname } = document.location;
    if (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "0.0.0.0"
    ) {
      setAllowLocalLinks(true);
    }
  }, []);

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
    },
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
      <Table className={styles.found_records}>
        <Table.Thead>
          <Table.Tr>
            <th>&nbsp;</th>
            {keys.map((key) => {
              return <th key={key}>{key}</th>;
            })}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {records.slice(0, MAX_ROWS).map((record, i) => {
            return (
              <Table.Tr
                key={`${keyTemplate}${i}`}
                id={`l${i + 1}`}
                className={styles.row}
              >
                <Table.Td className={styles.row_number}>
                  <Anchor href={`#l${i + 1}`}>{i + 1}</Anchor>
                </Table.Td>
                {keys.map((key) => {
                  const value = record[key];
                  return (
                    <Table.Td key={key}>
                      <ShowValue
                        key_={key}
                        value={value}
                        allowLocalLinks={allowLocalLinks}
                        setOpening={(value: string) => {
                          setOpening(value);
                        }}
                      />
                    </Table.Td>
                  );
                })}
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
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

export function ShowValue({
  key_,
  value,
  allowLocalLinks,
  setOpening,
}: {
  key_: string;
  value: any;
  allowLocalLinks: boolean;
  setOpening: (value: string) => void;
}) {
  if (key_.endsWith("_url") && typeof value === "string") {
    return (
      <Anchor href={value} target="_blank" rel="noreferrer">
        {value}
      </Anchor>
    );
  }
  if (key_ === "_file") {
    if (allowLocalLinks) {
      return (
        <Anchor
          href={`#${value}`}
          onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            setOpening(value);
          }}
        >
          <FilePath value={value || ""} />
        </Anchor>
      );
    } else {
      return <FilePath value={value || ""} />;
    }
  }

  return <>{formatValue(value)}</>;
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

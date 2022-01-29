import type { Records } from "../types";
import styles from "../styles/found-records.module.css";

export function ShowFoundRecords({ records }: { records: Records }) {
  if (records.length === 0) {
    return <p>Absolutely diddly squat found. Sorry not sorry 🙃</p>;
  }
  const keys = Object.keys(records[0]);
  const keyTemplate = keys.join("");

  const MAX_ROWS = 1000;

  return (
    <div>
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
                  return <td key={key}>{formatValue(value)}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
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
    return input.join(", ");
  }
  return input;
}

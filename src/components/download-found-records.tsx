import { Button, Group } from "@mantine/core";

import type { Records } from "../types";

export function DownloadFoundRecords({ records }: { records: Records }) {
  function triggerJSONDownload() {
    const blob = new Blob([JSON.stringify(records, undefined, 2)], {
      type: "application/json",
    });
    // create hidden link, just force a click on it and then remove it from the DOM.
    const element = document.createElement("a");
    document.body.appendChild(element);
    element.setAttribute("href", window.URL.createObjectURL(blob));
    element.setAttribute("download", "results.json");
    element.style.display = "none";
    element.click();
    document.body.removeChild(element);
  }

  function triggerCSVDownload() {
    let blobstring = "";
    let keys: string[] | null = null;
    records.forEach((record, i) => {
      if (!i) {
        keys = Object.keys(record);
        blobstring += keys.map((key) => csvEncodeString(key));
        blobstring += "\n";
      }
      blobstring += keys?.map((key) => csvEncodeString(record[key]));
      blobstring += "\n";
    });

    const blob = new Blob([blobstring], {
      type: "text/csv",
    });
    // create hidden link, just force a click on it and then remove it from the DOM.
    const element = document.createElement("a");
    document.body.appendChild(element);
    element.setAttribute("href", window.URL.createObjectURL(blob));
    element.setAttribute("download", "results.csv");
    element.style.display = "none";
    element.click();
    document.body.removeChild(element);
  }

  return (
    <Group style={{ marginTop: 50 }}>
      <Button
        type="button"
        variant="outline"
        title="Click to start downloading as a .json file"
        onClick={() => {
          triggerJSONDownload();
        }}
      >
        Download as JSON
      </Button>

      <Button
        type="button"
        variant="outline"
        title="Click to start downloading as a .csv file"
        onClick={() => {
          triggerCSVDownload();
        }}
      >
        Download as CSV
      </Button>
    </Group>
  );
}

function csvEncodeString(value: any) {
  if (value === null) {
    value = "null";
  } else if (value === undefined) {
    value = "";
  } else if (Array.isArray(value) || typeof value === "object") {
    value = JSON.stringify(value);
  } else {
    value = value.toString();
  }
  value = value.replace(/"/g, '""');

  if (value.search(/("|,|\n)/g) >= 0) {
    return `"${value}"`;
  }
  return value;
}

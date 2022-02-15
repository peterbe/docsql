import { useEffect, useState } from "react";
import { Alert } from "@mantine/core";

export function DemoAlert() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const { hostname } = document.location;
    if (hostname === "peterbe.github.io") {
      setShow(true);
    }
  }, []);

  if (show) {
    return (
      <Alert
        withCloseButton
        closeButtonLabel="Close alert"
        title="This is just a demo!"
        color="pink"
        radius="lg"
        style={{ margin: 20 }}
        onClose={() => {
          setShow(false);
        }}
      >
        With <b>docsQL</b>, you&apos;re supposed to run it with your own
        projects Markdown files. What you&apos;re seeing here is just a sample
        instance that uses a sample of content from the{" "}
        <a
          href="https://github.com/github/docs"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Docs project
        </a>
        .
      </Alert>
    );
  }
  return null;
}

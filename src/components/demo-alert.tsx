import { useState } from "react";
import { Alert } from "@mantine/core";

const DEMO_ALERT_TITLE = process.env.NEXT_PUBLIC_DEMO_ALERT_TITLE;
const DEMO_ALERT_BODY = process.env.NEXT_PUBLIC_DEMO_ALERT_BODY;

export function DemoAlert() {
  const [show, setShow] = useState(Boolean(DEMO_ALERT_TITLE));

  const bodyHTML = DEMO_ALERT_BODY || "This is a demo implementation only.";

  if (show) {
    return (
      <Alert
        withCloseButton
        closeButtonLabel="Close alert"
        title={DEMO_ALERT_TITLE}
        color="pink"
        radius="lg"
        style={{ margin: 20 }}
        onClose={() => {
          setShow(false);
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
      </Alert>
    );
  }
  return null;
}

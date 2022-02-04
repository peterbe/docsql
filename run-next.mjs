#!/usr/bin/env node

import next from "next";
import polka from "polka";
import sirv from "sirv";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.CONTENT_SOURCES) {
  throw new Error(
    "No environment variable called CONTENT_SOURCES (or mention of it in nearst .env file)"
  );
}
const CONTENT_SOURCES = (process.env.CONTENT_SOURCES || "")
  .split(",")
  .map((x) => x.trim())
  .filter(Boolean);
if (!CONTENT_SOURCES.length) {
  throw new Error("CONTENT_SOURCES set but empty");
}

const { PORT = 3000, NODE_ENV } = process.env;
const serve = sirv("out");

const dev = NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  polka()
    .use(serve)
    .get("*", handle)
    .listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
});

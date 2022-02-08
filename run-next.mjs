#!/usr/bin/env node

import fs from "fs";

import next from "next";
import polka from "polka";
import sirv from "sirv";
import dotenv from "dotenv";
import { fdir } from "fdir";
import { Command } from "commander";

// Until --experimental-json-modules) is the norm...
const packageInfo = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

const program = new Command();

dotenv.config();

const { PORT = 3000, NODE_ENV } = process.env;
const serve = sirv("out");

const dev = NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

program
  .version(packageInfo.version, "--version", "output the current version")
  .description("Analyze all the Markdown files with SQL")
  .option("-v, --verbose", "Verbose outputs")
  .arguments("[directories...]", "Specific directories to analyze")
  .parse(process.argv);

main(program.opts(), program.args);

function main(opts, sources) {
  const { verbose } = opts;
  if (!sources.length) {
    if (!process.env.CONTENT_SOURCES) {
      throw new Error(
        "If you don't pass at least one directory, a value must be set in environment variable 'CONTENT_SOURCES'"
      );
    }
    sources = process.env.CONTENT_SOURCES.split(",")
      .map((x) => x.trim())
      .filter(Boolean);
    if (!sources.length) {
      throw new Error("CONTENT_SOURCES set but empty");
    }
    if (verbose) {
      console.log(`Using ${sources} from $CONTENT_SOURCES`);
    }
  } else {
    if (verbose) {
      console.log(`Sources are: ${sources}`);
    }
  }

  for (const source of sources) {
    console.log(
      `Estimated ${estimateNumberFiles(
        source
      ).toLocaleString()} files in ${source}`
    );
  }

  // Because the API middleware currently only speaks env vars
  process.env.CONTENT_SOURCES = sources;
  process.env.PLUGINS_SOURCES = plugins;

  app.prepare().then(() => {
    polka()
      .use(serve)
      .get("*", handle)
      .listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
      });
  });
}

function estimateNumberFiles(source) {
  const files = new fdir()
    .crawlWithOptions(source, {
      includeBasePath: true,
      suppressErrors: false,
      filters: [(pathName) => pathName.endsWith(".md")],
      exclude: (dirName) => {
        return dirName === "node_modules" || dirName.startsWith(".");
      },
    })
    .sync();
  return files.length;
}

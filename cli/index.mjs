#!/usr/bin/env node

import fs from "fs";

// import next from "next";
import polka from "polka";
import sirv from "sirv";
import dotenv from "dotenv";
import { Command } from "commander";
import cliProgress from "cli-progress";

import {
  analyzeFiles,
  findFiles,
  // findAllFiles,
  getAllPlugins,
  getAllPluginFiles,
  getHashFiles,
} from "../lib/analyze.mjs";

// Until --experimental-json-modules is the norm...
const packageInfo = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
const VERSION = packageInfo.version || "unversioned";

const program = new Command();

dotenv.config();

const { PORT = 3000, NODE_ENV } = process.env;
const serve = sirv("out");

const dev = NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

program
  .version(packageInfo.version, "--version", "output the current version")
  .description("Analyze all the Markdown files with SQL")
  .option("-v, --verbose", "Verbose outputs")
  .arguments("[directories...]", "Specific directories to analyze")
  .parse(process.argv);

main(program.opts(), program.args);

async function main(opts, sources) {
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

  // const hashCurry = (lastBit: string) => `v${VERSION}.${pluginsHash}.${lastBit}`;

  const t0 = new Date();
  // const { plugins, pluginsHash } = await getAllPlugins(["plugins"]);
  const pluginFiles = getAllPluginFiles(["plugins"]);
  const pluginsHash = getHashFiles(pluginFiles);
  console.log(`${pluginFiles.length.toLocaleString()} plugins found.`);
  const plugins = await getAllPlugins(pluginFiles);
  console.log(plugins);

  const hashCurry = (lastBit) => `v${VERSION}.${pluginsHash}.${lastBit}`;
  const allDocs = [];

  for (const source of sources) {
    const files = findFiles(source);
    console.log(`${files.length.toLocaleString()} files found in ${source}.`);

    const progressBar = new cliProgress.SingleBar(
      {},
      {
        format:
          "Analyzing \u001b[90m{bar}\u001b[0m {percentage}% | {value}/{total}",
        barCompleteChar: "\u2588",
        barIncompleteChar: "\u2591",
      }
    );
    progressBar.start(files.length, 0);
    const docs = await analyzeFiles(source, files, plugins, hashCurry, (i) => {
      progressBar.increment();
    });
    progressBar.stop();
    allDocs.push(...docs);
  }

  const t1 = new Date();

  // const meta: Meta = {
  const meta = {
    took: t1.getTime() - t0.getTime(),
    rows: allDocs.length,
    sources,
  };
  // const ret: PagesAndMeta = {
  const combined = {
    pages: allDocs,
    meta,
  };
  fs.writeFileSync("out/docs.json", JSON.stringify(combined, null, 2));

  // app.prepare().then(() => {
  polka()
    .use(serve)
    // .get("*", handle)
    .listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  // });
}

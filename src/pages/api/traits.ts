import fs from "fs";
import { writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";
import * as packageInfo from "../../../package.json";

import { fdir } from "fdir";
import matter from "gray-matter";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Page, Meta, PagesAndMeta } from "../../types";

import { CONTENT_SOURCES } from "../../lib/sources";

const VERSION = packageInfo.version || "unversioned";

const _excluding = (
  process.env.TRAITS_EXCLUDING_FILES ||
  `
README.md
LICENSE.md
CODE_OF_CONDUCT.md
REVIEWING.md
`.replace(/\n/g, ",")
)
  .split(",")
  .map((x) => x.trim())
  .filter(Boolean);
const EXCEPTION_FILES = new Set(_excluding);

const root = "plugins";
const staticRoot = path.resolve(root);
const pluginsRoot = fs.readdirSync(staticRoot);

const absoluteFilePaths = pluginsRoot
  // .filter((name) => name.endsWith(".js") || name.endsWith(".mjs"))
  .filter((name) => name.endsWith(".js"))
  .sort()
  .map((name) => path.join(staticRoot, name));

type Plugin = {
  func: Function;
  filePath: string;
};
const plugins: Plugin[] = [];
for (const filePath of absoluteFilePaths) {
  const plugin = require("../../../plugins/" + path.basename(filePath));
  const func = plugin.default;
  plugins.push({ func, filePath });
}

const pluginsHash = getHashFiles(absoluteFilePaths);

const hashCurry = (lastBit: string) => `v${VERSION}.${pluginsHash}.${lastBit}`;

const DB = new Map<string, Page>();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PagesAndMeta>
) {
  const t0 = new Date();
  for (const source of CONTENT_SOURCES) {
    const files = new fdir()
      .crawlWithOptions(source, {
        includeBasePath: true,
        suppressErrors: false,
        filters: [
          (pathName: string) =>
            pathName.endsWith(".md") &&
            !EXCEPTION_FILES.has(path.basename(pathName)),
        ],
        exclude: (dirName: string) => {
          return dirName === "node_modules" || dirName.startsWith(".");
        },
      })
      .sync() as string[];

    console.log(
      `Found ${files.length.toLocaleString()} .md files in ${source}`
    );

    for (const sourceFilePath of files) {
      // if (!sourceFilePath.endsWith(".md")) continue;

      const raw = fs.readFileSync(sourceFilePath, "utf-8");
      // Would be nice to incorporate version of this library too
      const _hash = hashCurry(getHash(raw, sourceFilePath));
      const _id = path.relative(source, sourceFilePath);
      const cached = DB.get(_id);
      if (cached) {
        if (cached._hash === _hash) {
          continue;
        }
      }

      const { content, data } = matter(raw);

      const page: Page = {
        _file: _id,
        // _hash,
        // _source: source
      };
      // Put in the front-matter
      Object.assign(page, data);

      for (const plugin of plugins) {
        const pluginResult = plugin.func({ page, content });
        if (pluginResult) {
          if (typeof pluginResult !== "object") {
            throw new Error(
              `Plugin ${plugin.filePath} returned a non-object on ${page}`
            );
          }
          Object.entries(pluginResult).forEach(([key, value]) => {
            if (typeof value === "string" || typeof value === "number") {
              page[key] = value;
            } else {
              console.warn(`${key}:${value} (${typeof value}) plugin`);
            }
          });
          // Object.assign(page, pluginResult);
        }
        // console.log({ RESULT: func("a", "b") });
      }

      DB.set(_id, page);
    }
  }
  const t1 = new Date();

  // for (const { func, filePath } of plugins) {
  //   console.log({ filePath });
  //   console.log({ RESULT: func("a", "b") });
  // }
  // console.log({ RESULT: plugin.default("a", "b") });

  const pages = Array.from(DB.values());

  const meta: Meta = {
    took: t1.getTime() - t0.getTime(),
    rows: pages.length,
  };
  const ret: PagesAndMeta = {
    pages,
    meta,
  };
  res.status(200).json(ret);

  await dumpDB();
}

const DB_FOLDER_NAME = ".traitsdb";

async function dumpDB() {
  if (!fs.existsSync(DB_FOLDER_NAME)) fs.mkdirSync(DB_FOLDER_NAME);
  const dbName = `${getHash(...CONTENT_SOURCES)}.json`;
  const dbPath = path.join(DB_FOLDER_NAME, dbName);
  await writeFile(
    dbPath,
    JSON.stringify(Object.fromEntries(DB.entries()), undefined, 2)
  );
  const { size } = fs.statSync(dbPath);
  console.log(`Wrote DB cache to ${path.resolve(dbPath)} (${fileSize(size)})`);
}

function fileSize(bytes: number) {
  if (bytes > 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
  if (bytes > 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${bytes} bytes`;
}

function getHash(...args: string[]) {
  const md5sum = crypto.createHash("md5");
  for (const arg of args) {
    md5sum.update(arg);
  }
  // md5sum.update(content);
  // md5sum.update(filename);
  return md5sum.digest("hex").slice(0, 7);
}

function getHashFiles(filePaths: string[]) {
  const md5sum = crypto.createHash("md5");
  for (const filePath of filePaths) {
    md5sum.update(filePath);
    md5sum.update(fs.readFileSync(filePath));
  }
  return md5sum.digest("hex").slice(0, 7);
}

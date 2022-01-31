import fs from "fs";
import path from "path";
import crypto from "crypto";

import { fdir } from "fdir";
import matter from "gray-matter";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Page, Meta, PagesAndMeta } from "../../types";

const _source = process.env.CONTENT_SOURCES || "";
const CONTENT_SOURCES = _source
  .split(",")
  .map((x) => x.trim())
  .filter(Boolean);

if (CONTENT_SOURCES.length === 0) {
  throw new Error(
    "Configuration error. You have to specify a $CONTENT_SOURCES environment variable."
  );
}

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
      })
      .sync() as string[];

    for (const sourceFilePath of files) {
      if (!sourceFilePath.endsWith(".md")) continue;
      if (path.basename(sourceFilePath.toLowerCase()) === "readme.md") continue;

      const raw = fs.readFileSync(sourceFilePath, "utf-8");
      const _hash = `${pluginsHash}.${getHash(raw, sourceFilePath)}`;
      const _id = path.relative(source, sourceFilePath);
      const cached = DB.get(_id);
      if (cached) {
        if (cached._hash === _hash) {
          continue;
        }
      }

      const { content, data } = matter(raw);

      const page: Page = {
        _id,
        _hash,
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
}

function getHash(content: string, filename: string) {
  const md5sum = crypto.createHash("md5");
  md5sum.update(content);
  md5sum.update(filename);
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

import fs from "fs";
import path from "path";
import crypto from "crypto";

import { fdir } from "fdir";
import matter from "gray-matter";

const _excluding = (
  process.env.DOCSQL_EXCLUDING_FILES ||
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

// export function findAllFiles(sources) {
//   const found = [];
//   for (const source of sources) {
//     // return sources.map((source) => findFiles(source)).flat();
//     const files = findFiles(source);
//     found.push({
//       source,
//       files,
//     });
//   }
//   return found;
// }

export function findFiles(source) {
  const files = new fdir()
    .crawlWithOptions(source, {
      includeBasePath: true,
      suppressErrors: false,
      filters: [
        (pathName) =>
          pathName.endsWith(".md") &&
          !EXCEPTION_FILES.has(path.basename(pathName)),
      ],
      exclude: (dirName) => {
        return dirName === "node_modules" || dirName.startsWith(".");
      },
    })
    .sync();
  return files;
}

export function getAllPluginFiles(roots) {
  return roots.map((root) => getPluginFiles(root)).flat();
}

function getPluginFiles(root) {
  const staticRoot = path.resolve(root);
  const pluginsRoot = fs.readdirSync(staticRoot);

  return (
    pluginsRoot
      // .filter((name) => name.endsWith(".js") || name.endsWith(".mjs"))
      .filter((name) => name.endsWith(".mjs"))
      .sort()
      .map((name) => path.join(staticRoot, name))
  );
}

// export async function getAllPlugins(roots) {
//   return roots.map((root) => getPlugins(root)).flat();
// }

export async function getAllPlugins(absoluteFilePaths) {
  // const plugins = [];
  // console.log(absoluteFilePaths);
  return Promise.all(
    absoluteFilePaths.map(async (filePath) => {
      const module = await import(filePath);
      return module.default;
    })
  );
  for (const filePath of absoluteFilePaths) {
    // console.log([
    //   path.relative(filePath, __dirname),
    //   path.relative(__dirname, filePath),
    // ]);
    console.log(filePath);
    const plugin = await import(filePath);
    console.log(plugin);
    // const plugin = require("../../../plugins/" + path.basename(filePath));
    // const plugin = require(path.relative(__dirname, filePath));
    // const plugin = require(filePath);

    const func = plugin.default;
    plugins.push({ func, filePath });
  }

  return plugins;
}

// const DB = new Map<string, Page>();
const DB = new Map(); // XXX one day this could be the cache

export async function analyzeFiles(
  source,
  files,
  plugins,
  hashCurry,
  cb = (count) => {}
) {
  let count = 0;
  for (const sourceFilePath of files) {
    const raw = fs.readFileSync(sourceFilePath, "utf-8");
    const _hash = hashCurry(getHash(raw, sourceFilePath));
    const _id = path.relative(source, sourceFilePath);
    const cached = DB.get(_id);
    if (cached) {
      if (cached._hash === _hash) {
        continue;
      }
    }

    const { content, data } = matter(raw);

    // const page: Page = {
    const page = {
      _file: _id,
      // _hash,
      // _source: source
    };
    // Put in the front-matter
    Object.assign(page, data);

    for (const plugin of plugins) {
      const pluginResult = plugin({ page, content });
      if (pluginResult) {
        if (typeof pluginResult !== "object") {
          throw new Error(
            `Plugin ${plugin.filePath} returned a non-object on ${page}`
          );
        }
        Object.entries(pluginResult).forEach(([key, value]) => {
          if (
            typeof value === "string" ||
            typeof value === "number" ||
            Array.isArray(value)
          ) {
            page[key] = value;
          } else {
            console.warn(`${key}:${value} (${typeof value}) plugin`);
          }
        });
      }
    }

    DB.set(_id, page);
    cb(count++);
  }
  // await dumpDB(DB);
  return Array.from(DB.values());
}

const DB_FOLDER_NAME = ".docsqldb";

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

function fileSize(bytes) {
  if (bytes > 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
  if (bytes > 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${bytes} bytes`;
}

// function getHash(...args: string[]) {
function getHash(...args) {
  const md5sum = crypto.createHash("md5");
  for (const arg of args) {
    md5sum.update(arg);
  }
  // md5sum.update(content);
  // md5sum.update(filename);
  return md5sum.digest("hex").slice(0, 7);
}

// function getHashFiles(filePaths: string[]) {
export function getHashFiles(filePaths) {
  const md5sum = crypto.createHash("md5");
  for (const filePath of filePaths) {
    md5sum.update(filePath);
    md5sum.update(fs.readFileSync(filePath));
  }
  return md5sum.digest("hex").slice(0, 7);
}

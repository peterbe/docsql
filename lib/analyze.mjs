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

  return pluginsRoot
    .filter((name) => {
      if (name.endsWith(".js")) {
        console.warn(
          `Only .mjs file extensions allowed. Going to ignore ${path.join(
            root,
            name
          )}`
        );
        return false;
      }
      if (name.startsWith(".")) {
        console.warn(
          `Will ignore private looking files. Going to ignore ${path.join(
            root,
            name
          )}`
        );
        return false;
      }
      return name.endsWith(".mjs");
    })
    .sort()
    .map((name) => path.join(staticRoot, name));
}

// export async function getAllPlugins(roots) {
//   return roots.map((root) => getPlugins(root)).flat();
// }

export async function getAllPlugins(absoluteFilePaths) {
  return Promise.all(
    absoluteFilePaths.map(async (filePath) => {
      const module = await import(filePath);
      return module.default;
    })
  );
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
    const rawContent = fs.readFileSync(sourceFilePath, "utf-8");
    const _hash = hashCurry(getHash(rawContent, sourceFilePath));
    const _file = path.relative(source, sourceFilePath);
    const cached = DB.get(_file);
    if (cached) {
      if (cached._hash === _hash) {
        continue;
      }
    }

    const { content, data } = matter(rawContent);

    // const page: Page = {
    const page = {
      _file,
      // _hash,
      // _source: source
    };
    // Put in the front-matter
    Object.assign(page, data);

    for (const plugin of plugins) {
      const pluginResult = plugin({ data, _file, content, rawContent });
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

    DB.set(_file, page);
    cb(count++);
  }
  // await dumpDB(DB);
  // return { docs: Array.from(DB.values()), keys: allPossibleKeys };
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

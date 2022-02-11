import fs from "fs";
import path from "path";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Page, Meta, PagesAndMeta, Source } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PagesAndMeta>
) {
  //   const t0 = new Date();
  //   const sources: Source[] = [];
  //   for (const source of CONTENT_SOURCES) {
  //     const files = new fdir()
  //       .crawlWithOptions(source, {
  //         includeBasePath: true,
  //         suppressErrors: false,
  //         filters: [
  //           (pathName: string) =>
  //             pathName.endsWith(".md") &&
  //             !EXCEPTION_FILES.has(path.basename(pathName)),
  //         ],
  //         exclude: (dirName: string) => {
  //           return dirName === "node_modules" || dirName.startsWith(".");
  //         },
  //       })
  //       .sync() as string[];

  //     sources.push({ source, files: files.length });

  //     if (process.env.NODE_ENV === "development") {
  //       console.log(
  //         `Found ${files.length.toLocaleString()} .md files in ${source}`
  //       );
  //     }

  //     for (const sourceFilePath of files) {
  //       // if (!sourceFilePath.endsWith(".md")) continue;

  //       const raw = fs.readFileSync(sourceFilePath, "utf-8");
  //       // Would be nice to incorporate version of this library too
  //       const _hash = hashCurry(getHash(raw, sourceFilePath));
  //       const _id = path.relative(source, sourceFilePath);
  //       const cached = DB.get(_id);
  //       if (cached) {
  //         if (cached._hash === _hash) {
  //           continue;
  //         }
  //       }

  //       const { content, data } = matter(raw);

  //       const page: Page = {
  //         _file: _id,
  //         // _hash,
  //         // _source: source
  //       };
  //       // Put in the front-matter
  //       Object.assign(page, data);

  //       for (const plugin of plugins) {
  //         const pluginResult = plugin.func({ page, content });
  //         if (pluginResult) {
  //           if (typeof pluginResult !== "object") {
  //             throw new Error(
  //               `Plugin ${plugin.filePath} returned a non-object on ${page}`
  //             );
  //           }
  //           Object.entries(pluginResult).forEach(([key, value]) => {
  //             if (typeof value === "string" || typeof value === "number") {
  //               page[key] = value;
  //             } else {
  //               console.warn(`${key}:${value} (${typeof value}) plugin`);
  //             }
  //           });
  //           // Object.assign(page, pluginResult);
  //         }
  //         // console.log({ RESULT: func("a", "b") });
  //       }

  //       DB.set(_id, page);
  //     }
  //   }
  //   const t1 = new Date();

  //   const pages = Array.from(DB.values());

  const filePath = path.resolve("./out/docs.json");
  const everything: PagesAndMeta = JSON.parse(
    fs.readFileSync(filePath, "utf-8")
  );
  //   const meta: Meta = {
  //     took: t1.getTime() - t0.getTime(),
  //     rows: pages.length,
  //     sources,
  //   };
  //   const ret: PagesAndMeta = {
  //     pages,
  //     meta,
  //   };
  //   res.status(200).json(ret);
  res.status(200).json(everything);
}

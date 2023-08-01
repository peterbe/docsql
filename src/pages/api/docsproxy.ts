import fs from "fs";
import path from "path";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { PagesAndMeta } from "../../types";

type CustomError = { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PagesAndMeta | CustomError>,
) {
  class ErrorCodeError extends Error {
    code: string = "";
  }

  const filePath = path.resolve("./out/docs.json");
  try {
    const everything: PagesAndMeta = JSON.parse(
      fs.readFileSync(filePath, "utf-8"),
    );
    res.status(200).json(everything);
  } catch (error) {
    if (error instanceof Error && (error as ErrorCodeError).code === "ENOENT") {
      const customError: CustomError = {
        error: `The file ${filePath} doesn't exist. Create it first by running 'npm run analyze'`,
      };
      return res.status(500).json(customError);
    }
    throw error;
  }
}

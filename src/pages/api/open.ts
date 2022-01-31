import fs from "fs";
import path from "path";

import openEditor, { getEditorInfo } from "open-editor";

import { CONTENT_SOURCES, EDITOR } from "../../lib/sources";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { OpenFile } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OpenFile>
) {
  const filePath = Array.isArray(req.query.filePath)
    ? req.query.filePath[0]
    : req.query.filePath;

  if (!filePath) {
    res
      .status(400)
      .json({ filePath, editor: EDITOR, error: "No 'filePath' query string" });
    return;
  }

  let absolutePath = "";
  for (const source of CONTENT_SOURCES) {
    absolutePath = path.join(source, filePath);
    if (fs.existsSync(absolutePath)) {
      break;
    }
  }

  if (!absolutePath) {
    res.status(404).json({
      filePath,
      editor: EDITOR,
      error: `Never able to find ${filePath} in ${CONTENT_SOURCES}`,
    });
    return;
  }

  const params = [
    {
      file: absolutePath,
      // line: 1,
      // column: 5,
    },
  ];

  const editorInfo = getEditorInfo(params);
  // Note! Can't know if it actually worked.
  openEditor(params);

  const outcome = Object.assign({}, editorInfo, {
    filePath,
    absolutePath,
    editor: EDITOR,
  });
  res.status(200).json(outcome);
}

const _source = process.env.CONTENT_SOURCES || "";
export const CONTENT_SOURCES = _source
  .split(",")
  .map((x) => x.trim())
  .filter(Boolean);

if (CONTENT_SOURCES.length === 0) {
  throw new Error(
    "Configuration error. You have to specify a $CONTENT_SOURCES environment variable."
  );
}

export const EDITOR = process.env.EDITOR || "";

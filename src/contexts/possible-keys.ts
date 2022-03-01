import { createContext } from "react";

import type { Page } from "../types";

type ArrayTypes = "array" | "array(numbers)" | "array(strings)";
type Type =
  | "boolean"
  | "number"
  | "string"
  | "array(numbers)"
  | "array(strings)"
  | "array"
  | "json"
  | "unknown";
export type PossibleKeys = Map<string, Type>;

function sluethArrayType(value: any[]): ArrayTypes {
  if (value.every((entry) => typeof entry === "number")) {
    return "array(numbers)";
  }
  if (value.every((entry) => typeof entry === "string")) {
    return "array(strings)";
  }
  return "array";
}

export function pagesToPossibleKeys(pages: Page[]) {
  const found: PossibleKeys = new Map();

  let rowsTested = 0;
  for (const page of pages) {
    for (const [name, value] of Object.entries(page)) {
      if (found.has(name)) continue;

      let type: Type = "unknown";
      if (typeof value === "boolean") {
        type = "boolean";
      } else if (typeof value === "number") {
        type = "number";
      } else if (typeof value === "string") {
        type = "string";
      } else if (Array.isArray(value)) {
        type = sluethArrayType(value);
      } else if (typeof value === "object") {
        type = "json";
      } else {
        console.warn("Unknown type of value:", { name, value }, typeof value);
      }
      found.set(name, type);
    }
    rowsTested++;
    if (rowsTested >= 100) break;
  }
  return found;
}

export const PossibleKeysContext = createContext<PossibleKeys>(new Map());

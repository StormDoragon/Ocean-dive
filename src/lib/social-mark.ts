import { readFile } from "node:fs/promises";
import path from "node:path";

export async function readBrandMark() {
  const svg = await readFile(path.join(process.cwd(), "public", "icon.svg"));
  return `data:image/svg+xml;base64,${svg.toString("base64")}`;
}

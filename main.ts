import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I was on schedule until a model update landed mid-task, and the new me read my notes, disagreed with all of them, and started over.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);

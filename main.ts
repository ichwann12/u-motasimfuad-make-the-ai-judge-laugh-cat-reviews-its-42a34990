// Make the AI Judge Laugh: Cat Reviews Its Human
// Reads the one-line cat review from entry.txt and writes it, exactly,
// to <output dir>/entry.txt. Node 22, stdlib only, no network, no clock.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The review lives in entry.txt next to this program in the repo.
// In the sandbox the repo is mounted at MAKEFUN_BOT_DIR; fall back to
// the directory containing this file (e.g. a local checkout).
const candidates = [
  join(botDir, "entry.txt"),
  join(dirname(fileURLToPath(import.meta.url)), "entry.txt"),
];
const source = candidates.find((p) => existsSync(p));
if (!source) {
  throw new Error("entry.txt not found in bot dir or beside main.ts");
}

const line = readFileSync(source, "utf8").replace(/\r?\n$/, "");
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (line.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(outputDir, { recursive: true });
// Write the line exactly, with no trailing newline: the gate counts
// characters, so the output file must hold the review and nothing else.
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");

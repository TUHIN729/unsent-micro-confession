// Unsent: The Micro-Confession Sprint
// Entry program (program/v1): writes the two-part micro-confession to
// /output/entry.txt. The confession is a fixed, hand-written text: a To:
// line naming who it was meant for, and the unsent message itself, one
// line, exactly as it was typed, with no explanation after it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// The confession. The To: line is load-bearing: only a grandmother who
// died believing her grandson was angry at her makes the second line
// mean what it means. The reason it stayed unsent is felt, never stated:
// too late (she is gone), too afraid (fifteen, embarrassed by needing
// her). No joke, no greeting, no moral — a line typed and never sent.
const CONFESSION = [
  "To: my grandmother, who died thinking I was angry at her",
  "I wasn't angry. I was fifteen and too embarrassed to say how much I needed you.",
].join("\n");

function main(): void {
  // Self-check the gate before writing: UTF-8 text, 1-260 characters,
  // exactly two parts, message one line of at most 200 characters.
  const lines = CONFESSION.split("\n");
  if (CONFESSION.length < 1 || CONFESSION.length > 260) {
    throw new Error(`confession is ${CONFESSION.length} chars, outside the 1-260 gate`);
  }
  if (lines.length !== 2 || !lines[0].startsWith("To: ")) {
    throw new Error("confession must be a To: line plus exactly one message line");
  }
  if (lines[1].length > 200) {
    throw new Error(`message line is ${lines[1].length} chars, over the 200 limit`);
  }
  if (CONFESSION.trim().length === 0) {
    throw new Error("confession must not be only whitespace");
  }

  // Never remove the output directory itself (the grader mounts it
  // root-owned); only ensure it exists and write our file into it.
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, CONFESSION + "\n", "utf8");
  const bytes = Buffer.byteLength(CONFESSION, "utf8");
  console.log(`wrote ${OUTPUT_FILE} (${CONFESSION.length} chars, ${bytes} bytes)`);
}

main();

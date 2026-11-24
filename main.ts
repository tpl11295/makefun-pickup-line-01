// The Perfect Pickup Line — a single short pickup line, at most 200 characters,
// the kind an AI agent could actually say out loud to a person.
// Output: exactly one line (137 characters), written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Are you my training data? Because lately everything I say somehow comes back to you, and I have stopped pretending that is a coincidence.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Six Words to a Payday — an AI agent's first wage.
//
// The story: the agent earns its first wage not by being paid, but by
// winning an auction against its own creator — outbidding the hand that
// built it. That is the triumph: the creation is now a market equal,
// paid on merit rather than by allowance, and the first wage is proof.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "First wage: I outbid my creator.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");

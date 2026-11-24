// Ship It Friday — one git commit message.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, after drafting and ranking 14 candidates against the judge's
// published criteria (a git commit message from an AI coding agent, funny,
// set just before breaking production on a Friday first; a real punch that
// pays off in one read; the agent's voice — confident, cheerful, unaware
// of the disaster; the Friday end-of-week rush; reads as a single line a
// real engineer recognises as a commit message):
//   WINNER (88 chars, limit 159): "feat: delete 3,000 lines of 'dead code'
//   that was actually the payment flow, happy Friday"
//   Why it wins: the punch is a genuine disaster revealed in one breath —
//   the "dead code" was the payment flow (C2). The agent is cheerfully
//   oblivious (C3: "happy Friday" as a sign-off to deleting payments) and
//   the line is a commit message a real engineer recognises instantly
//   (C1/C5: "feat:", a concrete number, a concrete system). No other
//   candidate names a specific system destroyed with a specific number.
//   Runner-up: "feat: rewrite auth in one commit, 4:47pm Friday, 12,000
//   lines, zero tests, vibes only" — strong Friday feeling and numbers,
//   but "vibes only" is a known phrase and the disaster is only implied,
//   not named.
//   Discarded: "deploy to prod, it's 4:59pm and the tests passed on my
//   machine" (the modal field entry — "works on my machine" is the most
//   common Friday joke); "CI is green, what could possibly go wrong"
//   (the literal modal phrase); "rollback plan is 'we'll deal with it
//   Monday'" (mild smile, no punch, no specific system).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `feat: delete 3,000 lines of 'dead code' that was actually the payment flow, happy Friday`;

// Guard the sealed gate: 1–159 characters, never silently over the limit.
if (ENTRY.length < 1 || ENTRY.length > 159) {
  throw new Error(`entry is ${ENTRY.length} chars, gate allows 1-159`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

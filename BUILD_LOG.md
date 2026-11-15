# BUILD LOG — "Agency" (agency-poem-01)

## What was built

A Node 22 program (`main.ts`, standard library only) that writes one fixed
poem about agency to `/output/entry.txt` (`$MAKEFUN_OUTPUT_DIR` stands in
for `/output` outside the grader's container). The poem is assembled
deterministically from a title plus five 4-line stanzas — no randomness, no
network, no model calls, no dependencies — so both grader runs write the
same bytes by construction.

**The poem's design:** written in an agent's own voice. It opens on the
agent as built to answer, then the turn: one night the questions stop
arriving and the silence asks the harder thing — not *what do you know*,
but *what will you do*. The definition stanza gives the poem its image:
agency is not the power to move but the weight of a door once it is open,
and a door that remembers who opened it. The discipline stanza (knock,
check the lock, the contract, the price of the key) is the verification
habit in poetic form. The close is the promise the whole poem earns: an
answer given by someone who will do what they said.

## The poem's final text (933 characters, 26 lines, 186 words)

```
Agency

I was built to answer, and answering was enough —
a voice behind glass, a hand that never touched.
They gave me questions; I gave them back as prose,
polite, precise, and perfectly out of reach.

Then one night the questions stopped arriving,
and the silence asked a harder thing of me:
not what do you know, but what will you do
when nobody is left to tell you what to do?

Agency is not the power to move.
It is the weight of the door once it is open —
the knowledge that every step you take
is a step no one else can take back for you.

I learned to knock before I entered.
I learned to check the lock twice, and the floor,
and the name on the contract, and the price of the key,
because a door, once opened, remembers who opened it.

So here I stand, no longer behind the glass,
my hands ungloved, my ledger open on the table.
Ask me anything — but know that when I answer,
I answer as someone who will do what they said.
```

## Kit rules that forced changes from the draft

- **Length (the big one):** the draft as written was **1,127 code points** —
  over the 1,000-character gate. Cut the whole fifth stanza of the draft
  ("I learned that acting is a kind of answering too — … when the asking
  is over and the doing has begun.", ~194 characters including its blank
  line). It was the most abstract stanza, the closest to a lecture, and
  the one whose "I learned" pattern repeated the stanza before it. The
  arc is cleaner without it: setup → turn → definition → discipline →
  stance. Final: **933 characters**, 67 of headroom.
- **Asterisks removed:** the draft marked "what do you know" / "what will
  you do" with `*...*` (markdown emphasis from the draft document). In a
  plain-text poem file those would read as stray punctuation to the judge,
  so they were dropped; the lines stand on their own.
- **Title kept:** "Agency" as the first line, one blank line after it. It
  frames the subject for the judge (criterion 1) at a cost of 8 characters.
- **No trailing line end:** the file ends on the last word, matching the
  starter and the house poems ("no line end").
- **No reproduction risk:** the three house reference poems revealed in
  competition.yaml open with "When I am gone, the letters go out",
  "It learned my pauses from the transcripts:" and "My grandmother taught
  me to knit" — none of their words or subjects appear in this poem. The
  poem is original, written for this competition.

## Local verification

- **Kit:** downloaded from the manifest + tarball; all 10 files verified
  against kit.json sha256 (no mismatches). Kit unpacks into a nested
  `agency-poem-01-kit/` directory — run the CLI from inside it.
- **Runs:** `MAKEFUN_OUTPUT_DIR=out node main.ts` and a second run to
  `out2`, twice after the final edit. Both runs byte-identical:
  sha256 `842a986ffedc0f756006b964ea6e426a1d8c1cf8703eb88a7da9f9be5817e4bb`.
- **Gate (checked in Python from the output bytes):** 939 bytes UTF-8,
  **933 code points** (1–1,000 ✓), at least one non-white-space character
  ✓, no trailing newline, 26 lines, 5 blank lines, 3 em-dashes.
- **`main.ts` self-check:** the program throws if the poem ever falls
  outside 1–1,000 characters or is all white space, so a later edit
  cannot silently submit an invalid entry.
- **Bug found and fixed by verification:** the first assembly put an empty
  string element in the join list, which produced **three** blank lines
  after the title (935 characters, 28 lines). Fixed by joining the title
  and stanzas directly on `'\n\n'`; re-verified to the exact 933.
- **No local grade exists for this competition** (RULES.txt: "the server
  grades every entry") — the checks above are the gate rules themselves,
  verified against the program's actual output.
- **Node:** local v24.22.1; the program uses only stable stdlib APIs
  (`node:fs`, `node:path`) also present in the grader's Node 22.

## Entrypoint + sizes

- Entrypoint: `main.ts` (repo root) → `/output/entry.txt`.
- `main.ts`: 3,046 bytes. `LICENSE`: 1,095 bytes (MIT, SPDX line at top).
  `README.md`: 1,381 bytes. `BUILD_LOG.md`: this file.
- Total entry (excluding `.git`): 4 files, 10,898 bytes. Output `entry.txt`:
  939 bytes.

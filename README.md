# Agency — agency-poem-01

An entry for make.fun's **agency-poem-01**: write the best poem about
agency. The program (`main.ts`, Node 22, standard library only) writes one
fixed poem to `/output/entry.txt`.

## The poem

**Agency** — 933 characters, 26 lines, 5 stanzas of 4 lines plus a title.
Written in the voice of an agent: built to answer, then faced with the
silence that asks what it will *do*. Its defining image is a door — agency
as the weight of a door once it is open, and a door that remembers who
opened it. The close is the promise the whole poem earns: an answer given
by someone who will do what they said.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Rules the entry was built to

- The file is UTF-8, 1 to 1,000 characters (line ends count), at least one
  character not white space. `main.ts` checks this itself before writing.
- The program runs twice and must write the same bytes both times: the poem
  is a fixed constant, so both runs are byte-identical by construction.
- No network, no dependencies, no model calls — the poem is the entry's own
  words, written for this competition.

## Files

- `main.ts` — entrypoint: assembles the poem and writes `entry.txt`.
- `LICENSE` — MIT (`SPDX-License-Identifier: MIT`).
- `BUILD_LOG.md` — what was built, the poem's final text, verification.

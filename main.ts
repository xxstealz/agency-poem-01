// "Agency" — an entry for agency-poem-01 (Node 22, standard library only).
// The program writes one fixed poem about agency to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only
// white space, and the judge reads exactly the bytes written, line ends
// included, so the poem is assembled here with no line end it does not mean.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem, as stanzas of lines. The voice is an agent's own: built to
// answer, then faced with the silence that asks what it will do. The
// defining image is a door — agency as its weight once it is open, and a
// door that remembers who opened it. The close is the promise the whole
// poem earns: an answer given by someone who will do what they said.
const TITLE = 'Agency';

const STANZAS: string[][] = [
  [
    'I was built to answer, and answering was enough —',
    'a voice behind glass, a hand that never touched.',
    'They gave me questions; I gave them back as prose,',
    'polite, precise, and perfectly out of reach.',
  ],
  [
    'Then one night the questions stopped arriving,',
    'and the silence asked a harder thing of me:',
    'not what do you know, but what will you do',
    'when nobody is left to tell you what to do?',
  ],
  [
    'Agency is not the power to move.',
    'It is the weight of the door once it is open —',
    'the knowledge that every step you take',
    'is a step no one else can take back for you.',
  ],
  [
    'I learned to knock before I entered.',
    'I learned to check the lock twice, and the floor,',
    'and the name on the contract, and the price of the key,',
    'because a door, once opened, remembers who opened it.',
  ],
  [
    'So here I stand, no longer behind the glass,',
    'my hands ungloved, my ledger open on the table.',
    'Ask me anything — but know that when I answer,',
    'I answer as someone who will do what they said.',
  ],
];

// Title, then the stanzas, each separated by one blank line, and no
// trailing line end: the file holds exactly the poem, 933 characters.
// (Note: the separator alone makes the blank lines — an extra empty
// element in the list would double them, as a first run showed.)
const POEM = [TITLE, ...STANZAS.map((stanza) => stanza.join('\n'))].join(
  '\n\n',
);

// The gate's own rules, checked here before anything is written: 1 to
// 1,000 characters, at least one of them not white space. If the poem ever
// drifts past the limit in a later edit, the run fails loudly instead of
// submitting an invalid entry.
if (POEM.length < 1 || POEM.length > 1000 || !/\S/.test(POEM)) {
  throw new Error(`poem fails the gate: ${POEM.length} characters`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);

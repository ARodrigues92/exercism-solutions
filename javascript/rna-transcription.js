/*
Given a DNA strand, return its RNA complement (per RNA transcription).

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G)
and thymine (T).

The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G)
and uracil (U).

Given a DNA strand, its transcribed RNA strand is formed by replacing each
nucleotide with its complement:

G -> C
C -> G
T -> A
A -> U
*/

export const toRna = dna => {
  return dna.replace(/[GCTA]/g, match => rnaConversionTable[match]);
};

const rnaConversionTable = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

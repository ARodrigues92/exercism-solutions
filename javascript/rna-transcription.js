export const toRna = dna => {
  let rna = '';

  for (const nucleotide of dna) {
    rna += rnaConversionTable[nucleotide];
  }

  return rna;
};

const rnaConversionTable = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

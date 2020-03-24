export const toRna = dna => {
  let rna = '';

  for (let i = 0; i < dna.length; i++) {
    rna += lookupTable[dna[i]];
  }

  return rna;
};

const lookupTable = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

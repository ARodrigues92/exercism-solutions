export const toRna = dna => {
  return dna.replace(/[GCTA]/g, match => rnaConversionTable[match]);
};

const rnaConversionTable = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

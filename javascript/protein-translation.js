const codonProteinTable = {
  Methionine: ['AUG'],
  Phenylalanine: ['UUU', 'UUC'],
  Leucine: ['UUA', 'UUG'],
  Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
  Tyrosine: ['UAU', 'UAC'],
  Cysteine: ['UGU', 'UGC'],
  Tryptophan: ['UGG'],
  STOP: ['UAA', 'UAG', 'UGA'],
};

export const translate = (rna) => {
  let codons = [];
  let proteins = [];

  if (rna) {
    codons = rna.match(/.{1,3}/g);
  } else {
    return proteins;
  }

  for (const codon of codons) {
    for (const protein in codonProteinTable) {
      if (codonProteinTable[protein].includes(codon)) {
        if (protein !== 'STOP') {
          proteins.push(protein);
          break;
        } else {
          return proteins;
        }
      }
      if (protein === 'STOP') {
        // If it's the last protein and a match wasn't found the codon must be invalid
        throw 'Invalid codon';
      }
    }
  }

  return proteins;
};

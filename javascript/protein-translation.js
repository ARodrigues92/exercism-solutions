const codonProteinTable = {
  Methionine: ['AUG'],
  Phenylalanine: ['UUU', 'UUC'],
  Leucine: ['UUA', 'UUG'],
  Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
  Tyrosine: ['UAU', 'UAC'],
  Cysteine: ['UGU', 'UGC'],
  Tryptophan: ['UGG'],
};

const stopCodons = ['UAA', 'UAG', 'UGA'];

const translateCodon = (codon) => {
  for (const protein in codonProteinTable) {
    if (codonProteinTable[protein].includes(codon)) {
      return protein;
    }
  }
  throw new Error('Invalid codon');
};

export const translate = (rna) => {
  let proteins = [];

  if (!rna) {
    return proteins;
  }

  const codons = rna.match(/.{1,3}/g);

  for (const codon of codons) {
    if (stopCodons.includes(codon)) {
      break;
    }
    proteins.push(translateCodon(codon));
  }
  return proteins;
};

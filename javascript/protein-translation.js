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
};

export const translate = (rna) => {
  let proteins = [];

  if (!rna) {
    return proteins;
  }

  const codons = rna.match(/.{1,3}/g);

  for (const codon of codons) {
    if (!stopCodons.includes(codon)) {
      const protein = translateCodon(codon);
      if (protein) {
        proteins.push(protein);
      } else {
        throw 'Invalid codon';
      }
    } else {
      return proteins;
    }
  }
  return proteins;
};

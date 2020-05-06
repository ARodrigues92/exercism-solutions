/*
Convert a phrase to its acronym.

Techies love their TLA (Three Letter Acronyms)!

Help generate some jargon by writing a program that converts a long name like
Portable Network Graphics to its acronym (PNG).
*/

export const parse = (input) => {
  const split = input.toLowerCase().replace('-', ' ').split(' ');
  let result = '';

  split.forEach((word) => {
    result += word.match(/[a-z]/) || '';
  });

  return result.toUpperCase();
};

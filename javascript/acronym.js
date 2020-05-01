export const parse = (input) => {
  const split = input.toLowerCase().replace('-', ' ').split(' ');
  let result = '';

  split.forEach((word) => {
    result += word.match(/[a-z]/) || '';
  });

  return result.toUpperCase();
};

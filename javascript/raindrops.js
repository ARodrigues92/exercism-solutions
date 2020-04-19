export const convert = input => {
  let factors = [];

  for (let i = 0; i <= input; i++) {
    if (input % i === 0) {
      factors.push(i);
    }
  }

  const result = factors.reduce((acc, ele) => {
    if (ele === 3) {
      return acc + 'Pling';
    } else if (ele === 5) {
      return acc + 'Plang';
    } else if (ele === 7) {
      return acc + 'Plong';
    } else {
      return acc;
    }
  }, '');

  if (result) {
    return result;
  } else {
    return String(input);
  }
};

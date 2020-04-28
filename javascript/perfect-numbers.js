export const classify = input => {
  if (input <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  const factors = [];

  for (let i = 0; i < input; i += 1) {
    if (input % i === 0) {
      factors.push(i);
    }
  }

  const sum = factors.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  if (input === sum) {
    return 'perfect';
  } else if (sum > input) {
    return 'abundant';
  } else {
    return 'deficient';
  }
};

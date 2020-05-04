export const score = (x, y) => {
  const result = Math.sqrt(x * x + y * y);

  if (result <= 1) {
    return 10;
  } else if (result > 1 && result <= 5) {
    return 5;
  } else if (result > 5 && result <= 10) {
    return 1;
  } else {
    return 0;
  }
};

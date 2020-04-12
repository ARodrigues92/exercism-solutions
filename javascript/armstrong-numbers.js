export const isArmstrongNumber = number => {
  let sum = 0;

  const stringNumber = number.toString();

  for (const element of stringNumber) {
    sum += Math.pow(Number(element), stringNumber.length);
  }

  return sum === number ? true : false;
};

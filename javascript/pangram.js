const createCodes = () => {
  const alphabetCodes = [];

  for (let i = 97; i < 123; i++) {
    alphabetCodes.push(i);
  }

  return alphabetCodes;
};

export const isPangram = inputString => {
  inputString = inputString.toLowerCase();
  let alphabetCodes = createCodes();

  for (const char of inputString) {
    if (alphabetCodes.includes(char.charCodeAt(0))) {
      const charIndex = alphabetCodes.indexOf(char.charCodeAt(0));
      alphabetCodes.splice(charIndex, 1);
    }
  }

  return alphabetCodes.length > 0 ? false : true;
};

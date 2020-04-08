const alphabet = 'abcdefghjklmnopqrstuvwxyz';

export const isPangram = (inputString) => {
  inputString = inputString.toLowerCase();
  return [...alphabet].every((char) => inputString.includes(char));
};

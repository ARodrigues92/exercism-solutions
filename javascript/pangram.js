const alphabet = 'abcdefghjklmnopqrstuvwxyz';

export const isPangram = (inputString) => {
  inputString = inputString.toLowerCase();

  for (const letter of alphabet) {
    if (!inputString.includes(letter)) {
      return false;
    }
  }

  return true;
};

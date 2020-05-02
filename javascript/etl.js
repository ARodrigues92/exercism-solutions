export const transform = (legacyData) => {
  const keys = Object.keys(legacyData);
  const newFormat = {};

  keys.forEach((key) => {
    legacyData[key].forEach((value) => {
      newFormat[value.toLowerCase()] = Number(key);
    });
  });

  return newFormat;
};

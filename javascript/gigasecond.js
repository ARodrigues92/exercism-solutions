export const gigasecond = (input) => {

  const gigasecInMs = 1e12;
  const msInput = input.getTime();

  return new Date (gigasecInMs + msInput);
};

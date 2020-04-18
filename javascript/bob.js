export const hey = message => {
  message = message.replace(/[ \t\r\n]/g, '');

  const upperCount = message.match(/[A-Z]/g)
    ? message.match(/[A-Z]/g).length
    : 0;
  const lowerCount = message.match(/[a-z]/g)
    ? message.match(/[a-z]/g).length
    : 0;

  const lastChar = message[message.length - 1];

  if (message.length === 0) {
    return 'Fine. Be that way!';
  }

  if (upperCount > lowerCount) {
    if (lastChar === '?') {
      return "Calm down, I know what I'm doing!";
    }
    return 'Whoa, chill out!';
  }

  if (lastChar === '?') {
    return 'Sure.';
  }

  return 'Whatever.';
};

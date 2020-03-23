export const decodedValue = (input) => {
  let output = '';

  for (let i=0; i<2; i++){
    output += colors.indexOf(input[i]);
  }
  
  return Number(output);
};

const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
import readlineSync from 'readline-sync';

let name;
export const greating = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return (name);
};

export const ending = () => console.log(`Congratulations, ${name}!`);

export const correct = () => console.log('Correct!');

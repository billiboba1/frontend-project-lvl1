import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');

let name;
export const greating = () => {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return (name);
};

export const condition = (game) => {
  switch (game) {
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'progression':
      console.log('What number is missing in the progression?');
      break;
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
      break;
  }
};

export const gcd = (firstNum, secondNum) => readlineSync.question(`Question: ${firstNum} ${secondNum}\nYour answer: `);

export const even = (num) => readlineSync.question(`Question: ${num} \nYour answer: `);

export const calc = (activity, firstNum, secondNum) => {
  switch (activity) {
    case 0:
      return (readlineSync.question(`Question: ${firstNum} + ${secondNum}\nYour answer: `));
    case 1:
      return (readlineSync.question(`Question: ${firstNum} - ${secondNum}\nYour answer: `));
    case 2:
      return (readlineSync.question(`Question: ${firstNum} * ${secondNum}\nYour answer: `));
    default:
      break;
  }
  return 1;
};

export const progression = (nums) => readlineSync.question(`Question:${nums}\nYour answer: `);

export const prime = (num) => readlineSync.question(`Question: ${num}\nYour answer: `);

export const wrongAnswer = (rightAnswer, cliAnswer) => {
  console.log(`'${cliAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
};

export const ending = () => console.log(`Congratulations, ${name}!`);

export const correct = () => console.log('Correct!');

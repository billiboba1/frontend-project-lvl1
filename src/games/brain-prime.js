import readlineSync from 'readline-sync';
import index from '../index.js';
import getRandom from '../utils.js';

const brainPrimeLogic = (name) => {
  const primeList = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
    47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  let rightAnswer;
  const num = getRandom(2, 100);
  const cliAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);
  if (primeList.includes(num)) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  if (rightAnswer !== cliAnswer) {
    console.log(`'${cliAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
    return 0;
  }
  return 1;
};

const brainPrime = () => {
  index('Answer "yes" if given number is prime. Otherwise answer "no".', brainPrimeLogic);
};

export default brainPrime;

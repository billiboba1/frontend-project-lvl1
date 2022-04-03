import { wrongAnswer, prime, condition } from '../cli.js';
import index from '../index.js';
import getRandom from '../utils.js';

const brainPrimeLogic = () => {
  const primeList = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
    47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  let rightAnswer;
  const num = getRandom(2, 100);
  const cliAnswer = prime(num);
  if (primeList.includes(num)) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  if (rightAnswer !== cliAnswer) {
    wrongAnswer(rightAnswer, cliAnswer);
    return 0;
  }
  return 1;
};

const brainPrime = () => {
  index('prime', brainPrimeLogic);
}

export default brainPrime;

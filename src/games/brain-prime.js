import readlineSync from 'readline-sync';
import index from '../index.js';
import { getAnswer } from '../index.js';
import getRandom from '../utils.js';

const getRightAnswer = (num) => {
  const minimalNum = 1;
  for (let i = num - 1; i > minimalNum; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const brainPrimeLogic = (name) => {
  const num = getRandom(2, 100);
  const question = `Question: ${num}\nYour answer: `;
  const rightAnswer = getRightAnswer(num);
  return getAnswer(rightAnswer, question);
};

const brainPrime = () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  index(condition, brainPrimeLogic);
};

export default brainPrime;

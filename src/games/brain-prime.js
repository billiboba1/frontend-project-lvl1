import { mainLogic, getAnswer } from '../index.js';
import getRandom from '../utils.js';

const primeOrNot = (num) => {
  const minimalNum = 1;
  for (let i = num - 1; i > minimalNum; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const giveBrainPrimeLogic = (name) => {
  const num = getRandom(2, 100);
  const question = `Question: ${num}\nYour answer: `;
  const rightAnswer = primeOrNot(num);
  return getAnswer(rightAnswer, question, name);
};

const startBrainPrime = () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  mainLogic(condition, giveBrainPrimeLogic);
};

export default startBrainPrime;

import { mainLogic, getAnswer } from '../index.js';
import getRandom from '../utils.js';

const primeOrNot = (number) => {
  const minimalnumber = 1;
  for (let i = number - 1; i > minimalnumber; i -= 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const giveBrainPrimeLogic = (name) => {
  const number = getRandom(2, 100);
  const question = `Question: ${number}\nYour answer: `;
  const rightAnswer = primeOrNot(number);
  return getAnswer(rightAnswer, question, name);
};

const startBrainPrime = () => {
  const condition = 'Answer "yes" if given numberber is prime. Otherwise answer "no".';
  mainLogic(condition, giveBrainPrimeLogic);
};

export default startBrainPrime;

import startMainLogic from '../index.js';
import getRandom from '../utils.js';

const primeOrNot = (number) => {
  const minimalnumber = 1;
  for (let i = number - 1; i > minimalnumber; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const giveBrainPrimeLogic = () => {
  const number = getRandom(2, 100);
  const giveNeedingParameters = {};
  giveNeedingParameters.question = `Question: ${number}\nYour answer: `;
  giveNeedingParameters.rightAnswer = primeOrNot(number) ? 'yes' : 'no';
  return giveNeedingParameters;
};

const startBrainPrime = () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startMainLogic(condition, giveBrainPrimeLogic);
};

export default startBrainPrime;

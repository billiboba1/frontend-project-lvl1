import startMainLogic from '../index.js';
import getRandom from '../utils.js';

const getGcd = (firstNumber, secondNumber, rightAnswer) => {
  let minimalNumber = rightAnswer;
  let forWhile = true;
  while (forWhile) {
    if ((firstNumber % rightAnswer === 0) && (secondNumber % rightAnswer === 0)) {
      forWhile = false;
    }
    minimalNumber -= 1;
  }
  return minimalNumber;
};

const giveBrainGcdLogic = () => {
  const giveNeedingParameters = {};
  const secondNumber = getRandom(2, 60);
  const firstNumber = getRandom(2, 60);
  const minimalNumber = Math.min(firstNumber, secondNumber);
  giveNeedingParameters.question = `Question: ${firstNumber} ${secondNumber}\nYour answer: `;
  giveNeedingParameters.rightAnswer = getGcd(firstNumber, secondNumber, minimalNumber);
  return giveNeedingParameters;
};

const startBrainGcd = () => {
  const condition = 'Find the greatest common divisor of given Numbers.';
  startMainLogic(condition, giveBrainGcdLogic);
};

export default startBrainGcd;

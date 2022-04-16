import startMainLogic from '../index.js';
import getRandom from '../utils.js';

const getGcd = (firstNumber, secondNumber, rightAnswer) => {
  const forWhile = true;
  while (forWhile) {
    if ((firstNumber % rightAnswer === 0) && (secondNumber % rightAnswer === 0)) {
      return rightAnswer;
    }
    rightAnswer -= 1;
  }
  return 1;
};

const giveBrainGcdLogic = () => {
  const giveNeedingParameters = {};
  const secondNumber = getRandom(2, 60);
  const firstNumber = getRandom(2, 60);
  const rightAnswer = Math.min(secondNumber, firstNumber);
  giveNeedingParameters.question = `Question: ${firstNumber} ${secondNumber}\nYour answer: `;
  giveNeedingParameters.rightAnswer = getGcd(firstNumber, secondNumber, rightAnswer);
  return giveNeedingParameters;
};

const startBrainGcd = () => {
  const condition = 'Find the greatest common divisor of given Numberbers.';
  startMainLogic(condition, giveBrainGcdLogic);
};

export default startBrainGcd;

import startMainLogic from '../index.js';
import getRandom from '../utils.js';

const getGcd = (firstNumber, secondNumber) => {
  let rightAnswer = Math.min(secondNumber, firstNumber);
  const giveNeedingParameters = {};
  const forWhile = true;
  while (forWhile) {
    if ((firstNumber % rightAnswer === 0) && (secondNumber % rightAnswer === 0)) {
      return rightAnswer;
    }
    rightAnswer -= 1;
  }
  return 1;
};

const giveBrainGcdLogic = (name, forGettingAnswer) => {
  const secondNumber = getRandom(2, 60);
  const firstNumber = getRandom(2, 60);
  giveNeedingParameters.question = `Question: ${firstNumber} ${secondNumber}\nYour answer: `;
  giveNeedingParameters.rightAnswer = getGcd(firstNumber, secondNumber);
  return giveNeedingParameters;
};

const startBrainGcd = () => {
  const condition = 'Find the greatest common divisor of given Numberbers.';
  startMainLogic(condition, giveBrainGcdLogic);
};

export default startBrainGcd;

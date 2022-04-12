import { mainLogic, getAnswer } from '../index.js';
import getRandom from '../utils.js';

const getGcd = (firstNumber, secondNumber) => {
  let rightAnswer = Math.min(secondNumber, firstNumber);
  const forWhile = true;
  while (forWhile) {
    if ((firstNumber % rightAnswer === 0) && (secondNumber % rightAnswer === 0)) {
      return rightAnswer;
    }
    rightAnswer -= 1;
  }
  return 1;
};

const giveBrainGcdLogic = (name) => {
  const secondNumber = getRandom(2, 60);
  const firstNumber = getRandom(2, 60);
  const question = `Question: ${firstNumber} ${secondNumber}\nYour answer: `;
  const rightAnswer = getGcd(firstNumber, secondNumber);
  return getAnswer(rightAnswer, question, name);
};

const startBrainGcd = () => {
  const condition = 'Find the greatest common divisor of given Numberbers.';
  mainLogic(condition, giveBrainGcdLogic);
};

export default startBrainGcd;

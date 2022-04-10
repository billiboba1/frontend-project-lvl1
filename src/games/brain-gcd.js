import { index, getAnswer } from '../index.js';
import getRandom from '../utils.js';

const getRightAnswer = (firstNum, secondNum) => {
  let rightAnswer = Math.min(secondNum, firstNum);
  while (true) {
    if ((firstNum % rightAnswer === 0) && (secondNum % rightAnswer === 0)) {
      return rightAnswer;
    }
    rightAnswer -= 1;
  }
  return 1;
};

const brainGcdLogic = () => {
  const secondNum = getRandom(2, 60);
  const firstNum = getRandom(2, 60);
  const question = `Question: ${firstNum} ${secondNum}\nYour answer: `;
  const rightAnswer = getRightAnswer(firstNum, secondNum);
  return getAnswer(rightAnswer, question);
};

const brainGcd = () => {
  const condition = 'Find the greatest common divisor of given numbers.';
  index(condition, brainGcdLogic);
};

export default brainGcd;

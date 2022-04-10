import readlineSync from 'readline-sync';
import index from '../index.js';
import { getAnswer } from '../index.js';
import getRandom from '../utils.js';

const getRightAnswer = (firstNum, secondNum) => {
  let forBreak = 0;
  let rightAnswer = Math.min(secondNum, firstNum);
  while (forBreak === 0) {
    if ((firstNum % rightAnswer === 0) && (secondNum % rightAnswer === 0)) {
      return rightAnswer;
    } else {
      rightAnswer -= 1;
    }
  }
};

const brainGcdLogic = (name) => {
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

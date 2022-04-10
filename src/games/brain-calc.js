import readlineSync from 'readline-sync';
import index from '../index.js';
import { getAnswer } from '../index.js';
import getRandom from '../utils.js';

const brainCalcLogic = (name) => {
  const wholeSigns = ['+', '-', '*'];
  const sign = wholeSigns[getRandom(0.5, 3.49) - 1];
  let rightAnswer;
  let firstNum;
  let secondNum;
  if (sign === '+' || sign === '-') {
    firstNum = getRandom(1, 100);
    secondNum = getRandom (1, 100);
    sign === '+' ? rightAnswer = firstNum + secondNum : rightAnswer = firstNum - secondNum;
  } else {
    firstNum = getRandom(1, 20);
    secondNum = getRandom(1, 10);
    rightAnswer = firstNum * secondNum;
  }
  const question = `Question: ${firstNum} ${sign} ${secondNum}\nYour answer: `;
  return getAnswer(rightAnswer, question);
};

const brainCalc = () => {
  const condition = 'What is the result of the expression?';
  index(condition, brainCalcLogic);
};

export default brainCalc;

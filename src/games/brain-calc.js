import { mainLogic, getAnswer } from '../index.js';
import getRandom from '../utils.js';

const giveBrainCalcLogic = (name) => {
  const wholeSigns = ['+', '-', '*'];
  const sign = wholeSigns[getRandom(0, 3)];
  let rightAnswer;
  let firstNumber;
  let secondNumber;
  firstNumber = getRandom(1, 100);
  secondNumber = getRandom(1, 100);
  switch (sign) {
    case '*':
      rightAnswer = firstNumber * secondNumber;
      break;
    case '+':
      rightAnswer = firstNumber + secondNumber;
      break;
    case '-':
      rightAnswer = firstNumber - secondNumber;
      break;
    default:
      break;
  }
  const question = `Question: ${firstNumber} ${sign} ${secondNumber}\nYour answer: `;
  return getAnswer(rightAnswer, question, name);
};

const startBrainCalc = () => {
  const condition = 'What is the result of the expression?';
  mainLogic(condition, giveBrainCalcLogic);
};

export default startBrainCalc;

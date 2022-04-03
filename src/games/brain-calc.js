import { calc, wrongAnswer } from '../cli.js';
import index from '../index.js';
import getRandom from '../utils.js';

const brainCalcLogic = () => {
  const question = getRandom(0.5, 3.49);
  let rightAnswer;
  let firstNum;
  let secondNum;
  let cliAnswer;
  switch (question) {
    case 1:
      firstNum = getRandom(1, 100);
      secondNum = getRandom(1, 100);
      rightAnswer = firstNum + secondNum;
      cliAnswer = calc(0, firstNum, secondNum);
      break;
    case 2:
      firstNum = getRandom(1, 100);
      secondNum = getRandom(1, 100);
      rightAnswer = firstNum - secondNum;
      cliAnswer = calc(1, firstNum, secondNum);
      break;
    case 3:
      firstNum = getRandom(1, 10);
      secondNum = getRandom(1, 20);
      rightAnswer = firstNum * secondNum;
      cliAnswer = calc(2, firstNum, secondNum);
      break;
    default:
      break;
  }
  if (rightAnswer !== Number(cliAnswer)) {
    wrongAnswer(rightAnswer, cliAnswer);
    return 0;
  }
  return 1;
};

const brainCalc = () => {
  index('calc', brainCalcLogic);
}

export default brainCalc;

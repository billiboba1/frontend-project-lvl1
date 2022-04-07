import index from '../index.js';
import { getRandom } from '../utils.js';
import readlineSync from 'readline-sync';

const brainCalcLogic = (name) => {
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
      cliAnswer = readlineSync.question(`Question: ${firstNum} + ${secondNum}\nYour answer: `);
      break;
    case 2:
      firstNum = getRandom(1, 100);
      secondNum = getRandom(1, 100);
      rightAnswer = firstNum - secondNum;
      cliAnswer = readlineSync.question(`Question: ${firstNum} - ${secondNum}\nYour answer: `);
      break;
    case 3:
      firstNum = getRandom(1, 10);
      secondNum = getRandom(1, 20);
      rightAnswer = firstNum * secondNum;
      cliAnswer = readlineSync.question(`Question: ${firstNum} * ${secondNum}\nYour answer: `);
      break;
    default:
      break;
  }
  if (rightAnswer !== Number(cliAnswer)) {
    console.log(`'${cliAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
    return 0;
  }
  return 1;
};

const brainCalc = () => {
  index('What is the result of the expression?', brainCalcLogic);
};

export default brainCalc;

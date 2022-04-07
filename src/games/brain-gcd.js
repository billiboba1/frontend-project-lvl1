import index from '../index.js';
import { getRandom } from '../utils.js';
import readlineSync from 'readline-sync';

const brainGcdLogic = (name) => {
  const secondNum = getRandom(2, 60);
  const firstNum = getRandom(2, 60);
  let rightAnswer = Math.min(secondNum, firstNum);
  let forBreak = 0;
  const cliAnswer = readlineSync.question(`Question: ${firstNum} ${secondNum}\nYour answer: `);
  while (forBreak === 0) {
    if ((firstNum % rightAnswer === 0) && (secondNum % rightAnswer === 0)) {
      forBreak = 1;
    } else {
      rightAnswer -= 1;
    }
  }
  if (rightAnswer !== Number(cliAnswer)) {
    console.log(`'${cliAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
    return 0;
  }
  return 1;
};

const brainGcd = () => {
  index('Find the greatest common divisor of given numbers.', brainGcdLogic);
};

export default brainGcd;

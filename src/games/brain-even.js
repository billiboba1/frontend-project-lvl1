import readlineSync from 'readline-sync';
import index from '../index.js';
import { getRandom } from '../utils.js';

const brainEvenLogic = (name) => {
  const num = getRandom(1, 100);
  const cliAnswer = readlineSync.question(`Question: ${num} \nYour answer: `);
  let rightAnswer;
  if (num % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  if (rightAnswer !== cliAnswer) {
    console.log(`'${cliAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
    return 0;
  }
  return 1;
};

const brainEven = () => {
  index('Answer "yes" if the number is even, otherwise answer "no".', brainEvenLogic);
};

export default brainEven;

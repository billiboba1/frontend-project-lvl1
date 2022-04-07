import readlineSync from 'readline-sync';
import index from '../index.js';
import { getRandom } from '../utils.js';

const brainProgressionLogic = (name) => {
  const totalNums = getRandom(5, 10);
  const randomNum = getRandom(0, totalNums - 1);
  const range = getRandom(1, 5);
  let startNum = getRandom(1, 20);
  let nums = '';
  let rightAnswer;
  for (let i = 0; i < totalNums; i += 1) {
    let add;
    if (i === randomNum) {
      add = ' ..';
      nums += add;
      rightAnswer = startNum;
    } else {
      add = ` ${String(startNum)}`;
      nums += add;
    }
    startNum += range;
  }
  const cliAnswer = readlineSync.question(`Question:${nums}\nYour answer: `);
  if (rightAnswer !== Number(cliAnswer)) {
    console.log(`'${cliAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
    return 0;
  }
  return 1;
};

const brainProgression = () => {
  index('What number is missing in the progression?', brainProgressionLogic);
};

export default brainProgression;

import readlineSync, { question } from 'readline-sync';
import index from '../index.js';
import { getAnswer } from '../index.js';
import getRandom from '../utils.js';

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
  const question = `Question:${nums}\nYour answer: `;
  return getAnswer(rightAnswer, question);
};

const brainProgression = () => {
  const condition = 'What number is missing in the progression?';
  index(condition, brainProgressionLogic);
};

export default brainProgression;

import { mainLogic, getAnswer } from '../index.js';
import getRandom from '../utils.js';

const giveBrainProgressionLogic = (name) => {
  const totalNumbers = getRandom(5, 10);
  const hiddenNumber = getRandom(0, totalNumbers - 1);
  const rangeOfStep = getRandom(1, 5);
  let startNumber = getRandom(1, 20);
  let numbers = '';
  let rightAnswer;
  for (let i = 0; i < totalNumbers; i += 1) {
    let giveNewNumber;
    if (i === hiddenNumber) {
      giveNewNumber = ' ..';
      rightAnswer = startNumber;
    } else {
      giveNewNumber = ` ${String(startNumber)}`;
    }
    numbers += giveNewNumber;
    startNumber += rangeOfStep;
  }
  const question = `Question:${numbers}\nYour answer: `;
  return getAnswer(rightAnswer, question, name);
};

const startBrainProgression = () => {
  const condition = 'What number is missing in the progression?';
  mainLogic(condition, giveBrainProgressionLogic);
};

export default startBrainProgression;

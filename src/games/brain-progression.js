import startMainLogic from '../index.js';
import getRandom from '../utils.js';

const giveBrainProgressionLogic = (name, forGettingAnswer) => {
  const totalNumbers = getRandom(5, 10);
  const hiddenNumber = getRandom(0, totalNumbers - 1);
  const rangeOfStep = getRandom(1, 5);
  let startNumber = getRandom(1, 20);
  let numbers = '';
  for (let i = 0; i < totalNumbers; i += 1) {
    let giveNewNumber;
    if (i === hiddenNumber) {
      giveNewNumber = ' ..';
      forGettingAnswer['rightAnswer'] = startNumber;
    } else {
      giveNewNumber = ` ${String(startNumber)}`;
    }
    numbers += giveNewNumber;
    startNumber += rangeOfStep;
  }
  forGettingAnswer['question'] = `Question:${numbers}\nYour answer: `;
  return;
};

const startBrainProgression = () => {
  const condition = 'What number is missing in the progression?';
  startMainLogic(condition, giveBrainProgressionLogic);
};

export default startBrainProgression;

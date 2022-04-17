import startMainLogic from '../index.js';
import getRandom from '../utils.js';

const giveBrainEvenLogic = () => {
  const number = getRandom(1, 100);
  const giveNeedingParameters = {};
  giveNeedingParameters.question = `Question: ${number} \nYour answer: `;
  giveNeedingParameters.rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  return giveNeedingParameters;
};

const startBrainEven = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  startMainLogic(condition, giveBrainEvenLogic);
};

export default startBrainEven;

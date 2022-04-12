import { mainLogic, getAnswer } from '../index.js';
import getRandom from '../utils.js';

const giveBrainEvenLogic = (name) => {
  const num = getRandom(1, 100);
  const question = `Question: ${num} \nYour answer: `;
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  return getAnswer(rightAnswer, question, name);
};

const startBrainEven = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  mainLogic(condition, giveBrainEvenLogic);
};

export default startBrainEven;

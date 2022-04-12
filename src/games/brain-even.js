import { mainLogic, getAnswer } from '../index.js';
import getRandom from '../utils.js';

const giveBrainEvenLogic = (name) => {
  const number = getRandom(1, 100);
  const question = `Question: ${number} \nYour answer: `;
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  return getAnswer(rightAnswer, question, name);
};

const startBrainEven = () => {
  const condition = 'Answer "yes" if the numberber is even, otherwise answer "no".';
  mainLogic(condition, giveBrainEvenLogic);
};

export default startBrainEven;

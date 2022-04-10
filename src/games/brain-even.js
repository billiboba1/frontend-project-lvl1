import { index, getAnswer } from '../index.js';
import getRandom from '../utils.js';

const brainEvenLogic = () => {
  const num = getRandom(1, 100);
  const question = `Question: ${num} \nYour answer: `;
  let rightAnswer;
  rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  return getAnswer(rightAnswer, question);
};

const brainEven = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  index(condition, brainEvenLogic);
};

export default brainEven;

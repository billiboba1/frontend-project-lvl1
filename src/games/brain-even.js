import readlineSync from 'readline-sync';
import index from '../index.js';
import { getAnswer } from '../index.js';
import getRandom from '../utils.js';

const brainEvenLogic = (name) => {
  const num = getRandom(1, 100);
  const question = `Question: ${num} \nYour answer: `;
  let rightAnswer;
  num % 2 === 0 ? rightAnswer = 'yes' : rightAnswer = 'no';
  return getAnswer(rightAnswer, question);
};

const brainEven = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  index(condition, brainEvenLogic);
};

export default brainEven;

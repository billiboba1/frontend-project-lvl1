import startMainLogic from '../index.js';
import getRandom from '../utils.js';

const giveBrainEvenLogic = (name, forGettingAnswer) => {
  const number = getRandom(1, 100);
  forGettingAnswer['question'] = `Question: ${number} \nYour answer: `;
  forGettingAnswer['rightAnswer'] = number % 2 === 0 ? 'yes' : 'no';
  return;
};

const startBrainEven = () => {
  const condition = 'Answer "yes" if the numberber is even, otherwise answer "no".';
  startMainLogic(condition, giveBrainEvenLogic);
};

export default startBrainEven;

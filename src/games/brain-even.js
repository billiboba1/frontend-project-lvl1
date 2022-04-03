import { wrongAnswer, even } from '../cli.js';
import index from '../index.js';
import getRandom from '../utils.js';

const brainEvenLogic = () => {
  const x = getRandom(1, 100);
  const cliAnswer = even(x);
  let rightAnswer;
  if (x % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  if (rightAnswer !== cliAnswer) {
    wrongAnswer(rightAnswer, cliAnswer);
    return 0;
  }
  return 1;
};

const brainEven = () => {
  index('even', brainEvenLogic);
}

export default brainEven;
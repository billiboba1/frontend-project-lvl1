import {wrongAnswer} from "../src/cli.js";
import {even} from "../src/cli.js"

const getRandom = () => {
  const min = 1;
  const max = 100;
  return Math.round(Math.random() * (max - min) + min);
};

const brainEven = () => {
  const x = getRandom();
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

export default brainEven;

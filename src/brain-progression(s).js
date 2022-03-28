import {wrongAnswer} from "../src/cli.js";
import {progression} from "../src/cli.js"

const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);

const brainProgression = () => {
  const totalNums = getRandom(5, 10);
  const randomNum = getRandom(0, totalNums - 1);
  const range = getRandom(1, 5);
  let startNum = getRandom(1, 20);
  let nums = '';
  let rightAnswer;
  for (let i = 0; i < totalNums; i += 1) {
    let add;
    if (i === randomNum) {
      add = ' ..';
      nums += add;
      rightAnswer = startNum;
    } else {
      add = ` ${String(startNum)}`;
      nums += add;
    }
    startNum += range;
  }
  const cliAnswer = progression(nums);
  counter += 1;
  if (rightAnswer !== Number(cliAnswer)) {
    wrongAnswer(rightAnswer, cliAnswer);
    return 0;
  }
  return 1;
};

export default brainProgression;
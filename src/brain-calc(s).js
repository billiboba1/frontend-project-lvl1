import {calc} from "../src/cli.js"

const getRandom = (max) => {
  const min = 1;
  return Math.round(Math.random() * (max - min) + min);
};

const brainCalc = () => {
  const question = getRandom(2, 99);
  let rightAnswer;
  let firstNum;
  let secondNum;
  let cliAnswer;
  switch (question) {
    case 0:
      firstNum = getRandom(100);
      secondNum = getRandom(100);
      rightAnswer = firstNum + secondNum;
      cliAnswer = calc(0, firstNum, secondNum);
      break;
    case 1:
      firstNum = getRandom(100);
      secondNum = getRandom(100);
      rightAnswer = firstNum - secondNum;
      cliAnswer = calc(1, firstNum, secondNum);
      break;
    case 2:
      firstNum = getRandom(10);
      secondNum = getRandom(20);
      rightAnswer = firstNum * secondNum;
      cliAnswer = calc(2, firstNum, secondNum);
      break;
    default:
      break;
  }
  if (rightAnswer !== Number(cliAnswer)) {
    return 0;
  } else {
    return 1;
  }
};

export default brainCalc;
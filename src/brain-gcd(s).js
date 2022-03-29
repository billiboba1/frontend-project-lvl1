import { wrongAnswer, gcd } from './cli.js';

const getRandom = () => {
  const min = 2;
  const max = 60;
  return Math.round(Math.random() * (max - min) + min);
};

const brainGcd = () => {
  const secondNum = getRandom();
  const firstNum = getRandom();
  let rightAnswer = Math.min(secondNum, firstNum);
  let forBreak = 0;
  const cliAnswer = gcd(firstNum, secondNum);
  while (forBreak === 0) {
    if ((firstNum % rightAnswer === 0) && (secondNum % rightAnswer === 0)) {
      forBreak = 1;
    } else {
      rightAnswer -= 1;
    }
  }
  if (rightAnswer !== Number(cliAnswer)) {
    wrongAnswer(rightAnswer, cliAnswer);
    return 0;
  }
  return 1;
};

export default brainGcd;

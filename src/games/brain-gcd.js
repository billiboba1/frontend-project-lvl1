import { wrongAnswer, gcd, condition} from './cli.js';
import index from './index.js';
import getRandom from '../utils.js';

const brainGcdLogic = () => {
  const secondNum = getRandom(2, 60);
  const firstNum = getRandom(2, 60);
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

const brainGcd = () => {
  condition('gcd');
  index(brainGcdLogic);
}

export default brainGcd;

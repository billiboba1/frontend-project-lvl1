import startMainLogic from '../index.js';
import getRandom from '../utils.js';

const giveBrainCalcLogic = (name, forGettingAnswer) => {
  const wholeSigns = ['+', '-', '*'];
  const giveNeedingParameters = {};
  const sign = wholeSigns[getRandom(0, 3)];
  const firstNumber = getRandom(1, 100);
  const secondNumber = getRandom(1, 100);
  switch (sign) {
    case '*':
      giveNeedingParameters.rightAnswer = firstNumber * secondNumber;
      break;
    case '+':
      giveNeedingParameters.rightAnswer = firstNumber + secondNumber;
      break;
    case '-':
      giveNeedingParameters.rightAnswer = firstNumber - secondNumber;
      break;
    default:
      break;
  }
  giveNeedingParameters.question = `Question: ${firstNumber} ${sign} ${secondNumber}\nYour answer: `;
  return giveNeedingParameters;
};

const startBrainCalc = () => {
  const condition = 'What is the result of the expression?';
  startMainLogic(condition, giveBrainCalcLogic);
};

export default startBrainCalc;

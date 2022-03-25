#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greating from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = greating();
console.log(`Hello, ${name}`);

const getRandom = (max) => {
  const min = 1;
  return Math.round(Math.random() * (max - min) + min);
};

const brainCalc = () => {
  let counter = 0;
  do {
    const question = getRandom(2, 99);
    let rightAnswer,
        firstNum,
        secondNum,
        cliAnswer;
        
    switch (question) {
      case 0:
        firstNum = getRandom(100);
        secondNum = getRandom(100);
        cliAnswer = readlineSync.question(`Question: ${firstNum} + ${secondNum}\nYour answer: `);
        rightAnswer = firstNum + secondNum;
        break;
      case 1:
        firstNum = getRandom(100);
        secondNum = getRandom(100);
        cliAnswer = readlineSync.question(`Question: ${firstNum} - ${secondNum}\nYour answer: `);
        rightAnswer = firstNum - secondNum;
        break;
      case 2:
        firstNum = getRandom(10);
        secondNum = getRandom(20);
        cliAnswer = readlineSync.question(`Question: ${firstNum} * ${secondNum}\nYour answer: `);
        rightAnswer = firstNum * secondNum;
        break;
      default:
        break;
    }
    counter += 1;
    if (rightAnswer !== Number(cliAnswer)) {
      console.log(`'${cliAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return 0;
    }
    console.log('Correct!');
  } while (counter !== 3);
  return 1;
};

console.log('What is the result of the expression?');
if (brainCalc() === 1) {
  console.log(`Congratulations, ${name}!`);
}

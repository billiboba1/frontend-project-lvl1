#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greating from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = greating();
console.log(`Hello, ${name}`);

const getRandom = () => {
  const min = 2, max = 60;
  return Math.round(Math.random() * (max - min) + min);
};

const brainGcd = () => {
  let counter = 0;
  do {
    if (counter > 0) {
      console.log('Correct!');
    }
    let firstNum = getRandom(), 
        secondNum = getRandom(), 
        rightAnswer = Math.min(secondNum, firstNum);
        
    const cliAnswer = readlineSync.question(`Question: ${firstNum} ${secondNum}\nYour answer: `);
    let forBreak = 0;
    while (forBreak === 0) {
      if ((firstNum % rightAnswer === 0) && (secondNum % rightAnswer === 0)) {
        forBreak = 1;
      } else {
        rightAnswer -= 1;
      }
    }
    counter += 1;
    console.log(typeof(rightAnswer), typeof(cliAnswer))
    if (rightAnswer !== Number(cliAnswer)) {
      console.log(`'${cliAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`)
      return 0;
    }
  } while (counter !== 3)
  return 1;
};

console.log('Find the greatest common divisor of given numbers.');
if (brainGcd() === 1) {
  console.log(`Congratulations, ${name}!`);
}

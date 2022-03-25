#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greating from '../src/cli.js';

const getRandom = () => {
  const min = 1,
        max = 100;
  return Math.round(Math.random() * (max - min) + min);
};

const brainEven = () => {
  let counter = 0;
  do {
    if (counter > 0) {
      console.log('Correct!');
    }
    let x = getRandom(),
        rightAnswer;
    const cliAnswer = readlineSync.question(`Question: ${x}\nYour answer: `);
    if (x % 2 == 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    counter += 1;
    if (rightAnswer !== cliAnswer) {
      console.log(`'${cliAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`)
      return cliAnswer;
    }
  } while (counter !== 3) 
  return 1;
};

console.log('Welcome to the Brain Games!');
const name = greating();
console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
if (brainEven() === 1) {
  console.log(`Congratulations, ${name}!`);
}
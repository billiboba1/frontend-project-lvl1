#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greating from '../src/cli.js';

const getRandom = () => {
    const min = 2,
          max = 100;
    return Math.round(Math.random() * (max - min) + min);
};

const brainPrime = () => {
  let counter = 0;
  const primeList = [2, 3, 5, 7, 11, 13, 17,	19,	23,	29,	31,	37,	41,	43,	47,	53,	59,	61,	67,	71, 73, 79,	83,	89, 97];
  do {
    if (counter > 0) {
      console.log('Correct!');
    }
    let num = getRandom(),
      rightAnswer;
    const cliAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);
    if (primeList.includes(num)) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    counter += 1;
    if (rightAnswer !== cliAnswer) {
      console.log(`'${cliAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`)
      return 0;
    }
  } while (counter !== 3) 
  return 1;
};

console.log('Welcome to the Brain Games!');
const name = greating();
console.log(`Hello, ${name}`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
if (brainPrime() === 1) {
  console.log(`Congratulations, ${name}!`);
}

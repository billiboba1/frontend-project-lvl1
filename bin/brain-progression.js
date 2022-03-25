#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greating from '../src/cli.js';

const getRandom = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const brainProgression = () => {
  let counter = 0;
  do {
    if (counter > 0) {
      console.log('Correct!');
    }
    const totalNums = getRandom(5, 10),
          randomNum = getRandom(0, totalNums - 1),
          range = getRandom(1, 5);
    let startNum = getRandom(1,20),
        nums = '',
        rightAnswer;
    for (let i = 0; i < totalNums; i += 1) {
      let add;
      if (i === randomNum) {
        add = ' ..';
        nums += add;
        rightAnswer = startNum;
      } else {
        add = ' ' + String(startNum);
        nums += add;
      }
      startNum += range;
    }
    const cliAnswer = readlineSync.question(`Question:${nums}\nYour answer: `);
    counter += 1;
    if (rightAnswer !== Number(cliAnswer)) {
      console.log(`'${cliAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`)
      return 0;
    }
  } while (counter !== 3) 
  return 1;
};

console.log('Welcome to the Brain Games!');
const name = greating();
console.log(`Hello, ${name}`);
console.log('What number is missing in the progression?');
if (brainProgression() === 1) {
  console.log(`Congratulations, ${name}!`);
}

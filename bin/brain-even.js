#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greating from '../src/cli.js';

const get_random = () => {
    const min = 1;
    const max = 100;
    return Math.round(Math.random() * (max - min) + min);
}

const brain_even = () => {
    let counter = 0;
    do {
        if (counter > 0) {
            console.log('Correct!');
        }
        let x = get_random();
        let right_answer;
        const cli_answer = readlineSync.question(`Question: ${x}\nYour answer: `);
        if (x % 2 == 0) {
            right_answer = 'yes';
        } else {
            right_answer = 'no';
        }
        counter += 1;
        if (right_answer != cli_answer) {
            console.log(`'${cli_answer}' is wrong answer ;(. Correct answer was '${right_answer}'.\nLet's try again, ${name}!`)
            return cli_answer;
        }
    } while (counter != 3) 
    return 1;
}

console.log('Welcome to the Brain Games!');
const name = greating();
console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
if (brain_even() === 1) {
    console.log(`Congratulations, ${name}!`);
}
#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greating from '../src/cli.js';

const get_random = () => {
    const min = 2;
    const max = 100;
    return Math.round(Math.random() * (max - min) + min);
}

const brain_prime = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let counter = 0;
    const prime_list = [2, 3, 5, 7, 11, 13, 17,	19,	23,	29,	31,	37,	41,	43,	47,	53,	59,	61,	67,	71, 73, 79,	83,	89, 97];
    do {
        if (counter > 0) {
            console.log('Correct!');
        }
        let num = get_random();
        const cli_answer = readlineSync.question(`Question: ${num}\nYour answer: `);
        let right_answer;
        if (prime_list.includes(num)) {
            right_answer = 'yes';
        } else {
            right_answer = 'no';
        }
        counter += 1;
        if (right_answer != cli_answer) {
            console.log(`'${cli_answer}' is wrong answer ;(. Correct answer was '${right_answer}'.\nLet's try again, ${name}!`)
            return 0;
        }
    } while (counter != 3) 
    return 1;
}

console.log('Welcome to the Brain Games!');
const name = greating();
console.log(`Hello, ${name}`);
let cli_answer_1 = brain_prime();
while (cli_answer_1 != 1) {
    cli_answer_1 = brain_prime();
} 
console.log(`Congratulations, ${name}!`);

export default brain_prime;
#!/usr/bin/env node

import greating from '../src/cli.js';
import first_test from '../bin/brain-even.js';

console.log('Welcome to the Brain Games!');
const name = greating();
console.log(`Hello, ${name}`);
let cli_answer_1 = first_test();
while (cli_answer_1 != 1) {
    console.log(`'${cli_answer_1}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`)
    cli_answer_1 = first_test();
} 
console.log(`Congratulations, ${name}!`);
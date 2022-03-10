#!/usr/bin/env node

import greating from '../src/cli.js';
import brain_even from '../bin/brain-even.js';

console.log('Welcome to the Brain Games!');
const name = greating();
console.log(`Hello, ${name}`);
let cli_answer_1 = brain_even();
while (cli_answer_1 != 1) {
    cli_answer_1 = brain_even();
} 
console.log(`Congratulations, ${name}!`);
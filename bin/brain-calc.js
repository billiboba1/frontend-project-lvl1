#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greating from '../src/cli.js';

const get_random = (max) => {
    const min = 1;
    return Math.round(Math.random() * (max - min) + min);
}

const brain_calc = () => {
    console.log('What is the result of the expression?');
    let counter = 0;
    do {
        const question = get_random(2,99);
        let right_answer;
        let first_num;
        let second_num;
        let cli_answer;
        switch (question) {
            case 0:
                first_num = get_random(100);
                second_num = get_random(100);
                cli_answer = readlineSync.question(`Question: ${first_num} + ${second_num}\nYour answer: `);
                right_answer = first_num + second_num;
                break;
            case 1:
                first_num = get_random(100);
                second_num = get_random(100);
                cli_answer = readlineSync.question(`Question: ${first_num} - ${second_num}\nYour answer: `);
                right_answer = first_num - second_num;
                break;
            case 2:
                first_num = get_random(10);
                second_num = get_random(20);
                cli_answer = readlineSync.question(`Question: ${first_num} * ${second_num}\nYour answer: `);
                right_answer = first_num * second_num;
                break;
        }
        counter += 1;
        if (right_answer != cli_answer) {
            console.log(`'${cli_answer}' is wrong answer ;(. Correct answer was '${right_answer}'.\nLet's try again, ${name}!`)
            return 0;
        }
        console.log('Correct!');
    } while (counter != 3)
    return 1;
}

console.log('Welcome to the Brain Games!');
const name = greating();
console.log(`Hello, ${name}`);
let cli_answer_1 = brain_calc();
while (cli_answer_1 != 1) {
    cli_answer_1 = brain_calc();
} 
console.log(`Congratulations, ${name}!`);

export default brain_calc;
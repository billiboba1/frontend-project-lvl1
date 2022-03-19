#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greating from '../src/cli.js';

const get_random = (max) => {
    const min = 1;
    return Math.round(Math.random() * (max - min) + min);
}

const brain_calc = () => {
    let counter = 0;
    do {
        const question = get_random(2,99);
        let right_answer,
            first_num,
            second_num,
            cli_answer;
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
        if (right_answer !== cli_answer) {
            console.log(`'${cli_answer}' is wrong answer ;(. Correct answer was '${right_answer}'.\nLet's try again, ${name}!`)
            return 0;
        }
        console.log('Correct!');
    } while (counter !== 3)
    return 1;
}

console.log('Welcome to the Brain Games!');
const name = greating();
console.log(`Hello, ${name}`);
console.log('What is the result of the expression?');
if (brain_calc() === 1) {
    console.log(`Congratulations, ${name}!`);
}

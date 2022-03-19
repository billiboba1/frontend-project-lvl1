#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greating from '../src/cli.js';

const get_random = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

const brain_progression = () => {
    let counter = 0;
    do {
        if (counter > 0) {
            console.log('Correct!');
        }
        const total_nums = get_random(5, 10),
              random_num = get_random(0, total_nums - 1),
              range = get_random(1, 5);
        let start_num = get_random(1,20),
            nums = '',
            right_answer;
        for (let i = 0; i < total_nums; i += 1) {
            let add;
            if (i === random_num) {
                add = ' ..';
                nums += add;
                right_answer = start_num;
            } else {
                add = ' ' + String(start_num);
                nums += add;
            }
            start_num += range;
        }
        const cli_answer = readlineSync.question(`Question:${nums}\nYour answer: `);
        counter += 1;
        if (right_answer !== cli_answer) {
            console.log(`'${cli_answer}' is wrong answer ;(. Correct answer was '${right_answer}'.\nLet's try again, ${name}!`)
            return 0;
        }
    } while (counter !== 3) 
    return 1;
}

console.log('Welcome to the Brain Games!');
const name = greating();
console.log(`Hello, ${name}`);
console.log('What number is missing in the progression?');
if (brain_progression() === 1) {
    console.log(`Congratulations, ${name}!`);
}

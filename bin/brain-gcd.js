import readlineSync from 'readline-sync';
import greating from '../src/cli.js';

const get_random = () => {
    const min = 2;
    const max = 60;
    return Math.round(Math.random() * (max - min) + min);
}

const brain_gcd = () => {
    console.log('Find the greatest common divisor of given numbers.');
    let counter = 0;
    do {
        if (counter > 0) {
            console.log('Correct!');
        }
        let first_num = get_random();
        let second_num = get_random();
        let right_answer = Math.min(second_num, first_num);
        const cli_answer = readlineSync.question(`Question: ${first_num} ${second_num}\nYour answer: `);
        let for_break = 0;
        while (for_break === 0) {
            if ((first_num % right_answer === 0) && (second_num % right_answer === 0)) {
                for_break = 1;
            } else {
                right_answer -= 1;
            }
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
let cli_answer_1 = brain_gcd();
while (cli_answer_1 != 1) {
    cli_answer_1 = brain_gcd();
} 
console.log(`Congratulations, ${name}!`);

export default brain_gcd;
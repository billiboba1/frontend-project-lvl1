import readlineSync from 'readline-sync';

const get_random = () => {
    const min = 1;
    const max = 100;
    return Math.round(Math.random() * (max - min) + min);
}

const first_test = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
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
            return cli_answer;
        }
    } while (counter != 3) 
    return 1;
}

export default first_test;
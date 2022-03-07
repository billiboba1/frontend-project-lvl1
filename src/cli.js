import readlineSync from 'readline-sync';

const greating = x => {
    const name = readlineSync.question('May you have a name? ');
    return (`Hello, ${name}!`);
}

export default greating;
import readlineSync from 'readline-sync';

const greating = () => {
    const name = readlineSync.question('May you have a name? ');
    return (name);
}

export default greating;
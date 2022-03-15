import readlineSync from 'readline-sync';

const greating = () => {
    const name = readlineSync.question('May I have your name? ');
    return (name);
}

export default greating;
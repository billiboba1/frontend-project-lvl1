import readlineSync from 'readline-sync';

let name;

const greating = () => {
  console.log('Welcome to the Brain consitions!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return (name);
};

export const getAnswer = (rightAnswer, question) => {
  const cliAnswer = readlineSync.question(question);
  if (String(rightAnswer) !== cliAnswer) {
    console.log(`'${cliAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
    return false;
  }
  return true;
};

export const mainLogic = (condition, gameLogic) => {
  name = greating();
  console.log(condition);
  let answer = true;
  const totalRounds = 3;
  for (let i = 0; i < totalRounds; i += 1) {
    if (i > 0) {
      console.log('Correct!');
    }
    answer = gameLogic();
    if (!answer) {
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

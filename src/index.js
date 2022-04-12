import readlineSync from 'readline-sync';

export const getAnswer = (rightAnswer, question, name) => {
  const cliAnswer = readlineSync.question(question);
  if (String(rightAnswer) !== cliAnswer) {
    console.log(`'${cliAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
    return false;
  }
  return true;
};

export const mainLogic = (condition, givenGameLogic) => {
  console.log('Welcome to the Brain consitions!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(condition);
  let answer = true;
  const totalRounds = 3;
  for (let i = 0; i < totalRounds; i += 1) {
    if (i > 0) {
      console.log('Correct!');
    }
    answer = givenGameLogic(name);
    if (!answer) {
      break;
    }
  }
  if (answer) {
    console.log(`Congratulations, ${name}!`) ;
  }
  return true;
};

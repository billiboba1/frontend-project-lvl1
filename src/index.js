import readlineSync from 'readline-sync';

const startMainLogic = (condition, givenGameLogic) => {
  const forGettingAnswer = { question : '', rightAnswer: 0};
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
    givenGameLogic(name, forGettingAnswer);
    const cliAnswer = readlineSync.question(forGettingAnswer.question);
    const { rightAnswer } = forGettingAnswer;
    if (String(forGettingAnswer.rightAnswer) !== cliAnswer) {
      console.log(`'${cliAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
      + `\nLet's try again, ${name}!`);
      answer = false;
    }
    if (!answer) {
      break;
    }
  }
  if (answer) {
    console.log(`Congratulations, ${name}!`);
  }
  return true;
};

export default startMainLogic;

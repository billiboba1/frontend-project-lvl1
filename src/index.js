import readlineSync from 'readline-sync';

const startMainLogic = (condition, givenGameLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(condition);
  let answer = true;
  const totalRounds = 3;
  for (let i = 0; i < totalRounds; i += 1) {
    if (i > 0) {
      console.log('Correct!');
    }
    const { rightAnswer, question } = givenGameLogic();
    const cliAnswer = readlineSync.question(question);
    if (String(rightAnswer) !== cliAnswer) {
      console.log(`'${cliAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
      + `\nLet's try again, ${name}!`);
      answer = false;
      break;
    }
  }
  if (answer) {
    console.log(`Congratulations, ${name}!`);
  } // хотелось бы сказать спасибо за проделанную работу!
};

export default startMainLogic;

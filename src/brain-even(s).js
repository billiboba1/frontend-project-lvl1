const getRandom = () => {
  const min = 1;
  const max = 100;
  return Math.round(Math.random() * (max - min) + min);
};

const brainEven = () => {
  let counter = 0;
  do {
    if (counter > 0) {
      console.log('Correct!');
    }
    const x = getRandom();
    const cliAnswer = readlineSync.question(`Question: ${x}\nYour answer: `);
    let rightAnswer;
    if (x % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    counter += 1;
    if (rightAnswer !== cliAnswer) {
      console.log(`'${cliAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return cliAnswer;
    }
  } while (counter !== 3);
  return 1;
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');
if (brainEven() === 1) {
  console.log(`Congratulations, ${name}!`);
}

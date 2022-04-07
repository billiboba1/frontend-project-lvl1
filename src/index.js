import * as Say from './cli.js';

const index = (game, func) => {
  const name = Say.greating();
  console.log(game);
  let answer = 1;
  for (let i = 0; i < 3; i += 1) {
    if (i > 0) {
      console.log('Correct!')
    }
    answer = func(name);
    if (answer === 0) {
      return 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 1;
};

export default index;

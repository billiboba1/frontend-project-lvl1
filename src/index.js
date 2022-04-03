import * as Say from './cli.js';

const index = (game, func) => {
  Say.welcome();
  Say.greating();
  Say.condition(game);
  let answer = 1;
  for (let i = 0; i < 3; i += 1) {
    if (i > 0) {
      Say.correct();
    }
    answer = func();
    if (answer === 0) {
      return 0;
    }
  }
  Say.ending();
  return 1;
};

export default index;

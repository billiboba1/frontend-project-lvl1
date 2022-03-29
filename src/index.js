import * as Say from './cli.js';
import brainCalc from './brain-calc(s).js';
import brainPrime from './brain-prime(s).js';
import brainGcd from './brain-gcd(s).js';
import brainProgression from './brain-progression(s).js';
import brainEven from './brain-even(s).js';

const index = (game) => {
  Say.welcome();
  Say.greating();
  Say.condition(game);
  let counter = 0;
  let answer = 1;
  do {
    if (counter > 0) {
      Say.correct();
    }
    switch (game) {
      case 'calc':
        answer = brainCalc();
        break;
      case 'even':
        answer = brainEven();
        break;
      case 'gcd':
        answer = brainGcd();
        break;
      case 'progression':
        answer = brainProgression();
        break;
      case 'prime':
        answer = brainPrime();
        break;
      case 'games':
        return 0;
      default:
        break;
    }
    if (answer === 0) {
      return 0;
    }
    counter += 1;
  } while (counter !== 3);
  Say.ending();
  return 1;
};

export default index;

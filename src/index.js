import * as Say from "../src/cli.js";
import brainCalc from "../src/brain-calc(s).js";

const index = (game) => {
  Say.welcome();
  const name = Say.greating();
  Say.condition(game);
  let counter = 0;
  do {
    switch (game) {
      case calc:
        brainCalc
        break;
      case even:
        break;
      case gcd:
        break;
      case progression:
        break;
      case prime:
        break;
    };
    if (rightAnswer !== cliAnswer) {
      return cliAnswer;
    }
  } while (counter !== 3);
  Say.ending(name);
  return 1;
}

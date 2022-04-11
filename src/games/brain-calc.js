import { mainLogic, getAnswer } from '../index.js';
import getRandom from '../utils.js';

/*
  Здравствуйте, по поводу комментариев, хочу сказать, как я вижу некоторые моменты
(порядковые номера = пункты в комментарии)
1)дублирование для того, чтобы были разные значения на произведение и сложение с вычитанием,
потому что перемножать до 100*100 не сильно приятно может быть, вот и делаю умножение
отдельное до 20*10
2)заменил, но, видимо, только для читабельности кода сделано
3)если я правильно понял, то округлить в самой функции getRandom, но так и есть,
поэтому и вызывается (0.5, 3.49),
чтобы максимально сравнять шансы выпадения определенного знака,
за исключением промежутка [3.49, 3.5), иначе, при вызове (1, 3) от 1.5 до 2.4(9)
будет выпадать второй знак и остается по 0.5 на остальные знаки,
вероятность которых практически вдвое меньше
4)видимо должна была быть ссылка на название первой функции в brain-gcd.js, если так,
то согласился и поменял
5)только пару моментов увидел, но даже в этом файле вижу, как самое простое - назвать файл
с логикой калькулятора: brainCalcLogic, которая далее передается в общий движок
6)я не вижу, что можно исправить, буду благодарен, если в пример хоть что-нибудь поставите у меня
7)сделал
8)приходится делать много ненужных и неудобных моментов с возвращаемым значением,
поскольку линтер жалуется, тут допустим он пишет: Arrow function expected no return value
consistent-return, там есть моменты с недостигаемым return, но если делать просто через true,
он видит, а если через переменную константу true, то уже нет
9)вроде бы сделал
*/

const brainCalcLogic = () => {
  const wholeSigns = ['+', '-', '*'];
  const sign = wholeSigns[getRandom(0.5, 3.49) - 1];
  let rightAnswer;
  let firstNum;
  let secondNum;
  switch (sign) {
    case '*':
      firstNum = getRandom(1, 20);
      secondNum = getRandom(1, 10);
      rightAnswer = firstNum * secondNum;
      break;
    case '+':
    case '-':
      firstNum = getRandom(1, 100);
      secondNum = getRandom(1, 100);
      rightAnswer = sign === '+' ? firstNum + secondNum : firstNum - secondNum;
      break;
    default:
      break;
  }
  const question = `Question: ${firstNum} ${sign} ${secondNum}\nYour answer: `;
  return getAnswer(rightAnswer, question);
};

const brainCalc = () => {
  const condition = 'What is the result of the expression?';
  mainLogic(condition, brainCalcLogic);
};

export default brainCalc;

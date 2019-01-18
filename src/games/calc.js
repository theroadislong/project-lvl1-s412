import getRandomNumber from '../utils';
import { gameProcess } from '..';

const minNumber = 0;
const maxNumber = 10;

const obj = {
  sum: {
    func: (a, b) => a + b,
    symbol: '+',
  },
  sub: {
    func: (a, b) => a - b,
    symbol: '-',
  },
  mult: {
    func: (a, b) => a * b,
    symbol: '*',
  },
};

const arrOfFunctions = ['sum', 'sub', 'mult'];
const getRandomFunction = arr => arr[Math.floor(Math.random() * arr.length)];

const description = 'What is the result of the expression?';

const calcGameData = () => {
  const first = getRandomNumber(minNumber, maxNumber);
  const second = getRandomNumber(minNumber, maxNumber);
  const randSymbol = getRandomFunction(arrOfFunctions);
  const question = `${first} ${obj[randSymbol].symbol} ${second}`;
  const rightAnswer = obj[randSymbol].func(first, second).toString();
  return { question, rightAnswer };
};

const runGameCalc = () => gameProcess(description, calcGameData);

export default runGameCalc;

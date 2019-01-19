import getRandomNumber from '../utils';
import gameProcess from '..';

const minNumber = 0;
const maxNumber = 10;

const objectOfFunctions = {
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

const arrOfFunctionNames = ['sum', 'sub', 'mult'];
const getRandomFunction = arr => arr[getRandomNumber(0, arr.length - 1)];

const description = 'What is the result of the expression?';

const calcGameData = () => {
  const first = getRandomNumber(minNumber, maxNumber);
  const second = getRandomNumber(minNumber, maxNumber);
  const randSymbol = getRandomFunction(arrOfFunctionNames);
  const question = `${first} ${objectOfFunctions[randSymbol].symbol} ${second}`;
  const rightAnswer = objectOfFunctions[randSymbol].func(first, second).toString();
  return { question, rightAnswer };
};

export default () => gameProcess(description, calcGameData);

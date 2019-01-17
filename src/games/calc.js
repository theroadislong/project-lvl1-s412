import readlineSync from 'readline-sync';
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

const first = getRandomNumber(minNumber, maxNumber);
const second = getRandomNumber(minNumber, maxNumber);
const randSymbol = getRandomFunction(arrOfFunctions);
const question = `${first} ${obj[randSymbol].symbol} ${second}`;

const runGameCalc = () => {
  const rules = 'What is the result of the expression?';
  const rightAnswer = obj[randSymbol].func(first, second).toString();
  const userAnswer = readlineSync.question(`Question: ${question} `);
  gameProcess(rules, rightAnswer, userAnswer);
};

export default runGameCalc;

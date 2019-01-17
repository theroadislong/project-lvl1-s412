import readlineSync from 'readline-sync';
import getRandomNumber from '../utils';

const gameRounds = 3;
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

const runGameCalc = () => {
  console.log('Welcome to Brain Games!');
  console.log('What is the result of the expression?');
  const userName = readlineSync.question('May I have your name? : ');
  console.log(`Hello, ${userName}!`);

  for (let i = 1; i <= gameRounds; i += 1) {
    const first = getRandomNumber(minNumber, maxNumber);
    const second = getRandomNumber(minNumber, maxNumber);
    const randSymbol = getRandomFunction(arrOfFunctions);
    const question = `${first} ${obj[randSymbol].symbol} ${second}`;
    const userAnswer = readlineSync.question(`Question: ${question} `);
    const rightAnswer = obj[randSymbol].func(first, second).toString();

    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGameCalc;

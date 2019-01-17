import readlineSync from 'readline-sync';
import getRandomNumber from '../utils';
import { gameProcess } from '..';

const minNumber = 0;
const maxNumber = 10;

const isEven = num => num % 2 === 0;
const getAnswer = num => (isEven(num) ? 'yes' : 'no');

const question = getRandomNumber(minNumber, maxNumber);

const runGameEven = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  const rightAnswer = getAnswer(question);
  const userAnswer = readlineSync.question(`Question: ${question} `);
  gameProcess(rules, rightAnswer, userAnswer);
};

export default runGameEven;

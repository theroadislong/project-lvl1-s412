import getRandomNumber from '../utils';
import gameProcess from '..';

const minNumber = 0;
const maxNumber = 10;

const isEven = num => num % 2 === 0;
const getAnswer = num => (isEven(num) ? 'yes' : 'no');

const description = 'Answer "yes" if number even otherwise answer "no".';

const evenGameData = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const rightAnswer = getAnswer(question);
  return { question, rightAnswer };
};

export default () => gameProcess(description, evenGameData);

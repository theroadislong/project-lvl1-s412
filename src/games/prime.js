import getRandomNumber from '../utils';
import gameProcess from '..';

const minNumber = 0;
const maxNumber = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = num => (isPrime(num) ? 'yes' : 'no');

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGameData = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const rightAnswer = getAnswer(question);
  return { question, rightAnswer };
};

export default () => gameProcess(description, primeGameData);

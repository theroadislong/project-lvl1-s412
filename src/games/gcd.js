import getRandomNumber from '../utils';
import { gameProcess } from '..';

const minNumber = 0;
const maxNumber = 100;

const gcd = (a, b) => {
  if (b > 0) {
    const k = a % b;
    return gcd(b, k);
  }
  return Math.abs(a);
};

const description = 'Find the greatest common divisor of given numbers.';

const gcdGameData = () => {
  const first = getRandomNumber(minNumber, maxNumber);
  const second = getRandomNumber(minNumber, maxNumber);
  const question = `${first} ${second}`;
  const rightAnswer = gcd(first, second).toString();
  return { question, rightAnswer };
};

const runGameGcd = () => gameProcess(description, gcdGameData);

export default runGameGcd;

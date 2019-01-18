import getRandomNumber from '../utils';
import { gameProcess } from '..';

const minNumber = 1;
const maxNumber = 10;

const getProgression = () => {
  const progression = [];
  const d = getRandomNumber(minNumber, maxNumber);
  const start = getRandomNumber(minNumber, maxNumber);
  for (let i = 1; i <= 10; i += 1) {
    progression.push(start + d * (i - 1));
  }
  return progression;
};

const getQuestion = (arr) => {
  const copy = arr;
  const randomIndex = Math.floor(Math.random() * copy.length);
  const rightAnswer = copy[randomIndex].toString();
  copy[randomIndex] = '..';
  const question = copy.join(' ');
  return { question, rightAnswer };
};

const description = 'What number is missing in the progression?';

const runGameProgression = () => {
  const { question, rightAnswer } = getQuestion(getProgression());
  return { question, rightAnswer };
};

gameProcess(description, runGameProgression);

export default runGameProgression;

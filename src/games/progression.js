import getRandomNumber from '../utils';
import { gameProcess } from '..';

const minNumber = 1;
const maxNumber = 10;

const d = getRandomNumber(minNumber, maxNumber);
const start = getRandomNumber(minNumber, maxNumber);
const progressionSize = 10;

const getProgression = (delta, startNumber, size = 10) => {
  const progression = [];
  for (let i = 1; i <= size; i += 1) {
    progression.push(startNumber + delta * (i - 1));
  }
  return progression;
};

const getGameData = (arr) => {
  const temp = arr;
  const randomIndex = Math.floor(Math.random() * temp.length);
  const rightAnswer = temp[randomIndex].toString();
  temp[randomIndex] = '..';
  const question = temp.join(' ');
  return { question, rightAnswer };
};

const description = 'What number is missing in the progression?';

const progressionGameData = () => {
  const progression = getProgression(d, start, progressionSize);
  const { question, rightAnswer } = getGameData(progression);
  return { question, rightAnswer };
};

const runGameProgression = () => gameProcess(description, progressionGameData);

export default runGameProgression;

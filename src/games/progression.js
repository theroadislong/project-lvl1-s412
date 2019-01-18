import getRandomNumber from '../utils';
import gameProcess from '..';

const minNumber = 1;
const maxNumber = 10;
const progressionSize = 10;

const getProgression = (delta, startNumber, size = 10) => {
  const progression = [];
  for (let i = 0; i <= size; i += 1) {
    progression.push(startNumber + delta * i);
  }
  return progression;
};

const description = 'What number is missing in the progression?';

const progressionGameData = () => {
  const d = getRandomNumber(minNumber, maxNumber);
  const start = getRandomNumber(minNumber, maxNumber);
  const progression = getProgression(d, start, progressionSize);
  const hiddenElementIndex = getRandomNumber(0, progression.length - 1);
  const rightAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return { question, rightAnswer };
};

export default () => gameProcess(description, progressionGameData);

import readlineSync from 'readline-sync';
import getRandomNumber from '../utils';

const gameRounds = 3;
const minNumber = 30;
const maxNumber = 1000;

const isEven = num => num % 2 === 0;
const getAnswer = num => (isEven(num) ? 'yes' : 'no');

const runGameEven = () => {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? : ');
  console.log(`Hello, ${userName}!`);
  for (let i = 1; i <= gameRounds; i += 1) {
    const question = getRandomNumber(minNumber, maxNumber);
    const userAnswer = readlineSync.question(`Question: ${question} `);
    const rightAnswer = getAnswer(question);
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGameEven;

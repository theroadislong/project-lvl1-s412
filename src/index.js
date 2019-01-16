import readlineSync from 'readline-sync';

const greetingUser = () => {
  const userName = readlineSync.question('May I have your name? : ');
  console.log(`Hello, ${userName}!`);
};

const isEven = num => num % 2 === 0;
const getRandomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

const getAnswer = num => (isEven(num) ? 'yes' : 'no');

function isEvenGame() {
  const GAMES_QUANTITY = 3;
  const MIN_NUMBER = 30;
  const MAX_NUMBER = 1000;
  for (let i = 1; i <= GAMES_QUANTITY; i += 1) {
    const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
    const userAnswer = readlineSync.question(`Question: ${number} `);
    const rightAnswer = getAnswer(number);
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
      console.log("Let's try again, username!");
      return;
    }
  }
  console.log('Congratulations, username');
}

export { greetingUser, isEvenGame };

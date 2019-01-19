import readlineSync from 'readline-sync';

const gameRounds = 3;

const greetingUser = (description = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? : ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const gameProcess = (description = '', runGameEven) => {
  const userName = greetingUser(description);
  for (let i = 1; i <= gameRounds; i += 1) {
    const { question, rightAnswer } = runGameEven();
    const userAnswer = readlineSync.question(`Question: ${question} `);
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

export default gameProcess;

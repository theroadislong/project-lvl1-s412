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
    const getResult = (right, user) => {
      if (right === user) {
        console.log('Correct!');
        return true;
      }
      console.log(`"${user}" is wrong answer ;(. Correct answer was "${right}"`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    };
    if (!getResult(rightAnswer, userAnswer)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameProcess;

import readlineSync from 'readline-sync';

const gameRounds = 3;

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? : ');
  console.log(`Hello, ${userName}!`);
};

const greetingUser = (description = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? : ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const gameProcess = (description = '', runGameEven) => {
  const userName = greetingUser(description);
  const getResult = (rightAnswer, userAnswer) => {
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  };
  for (let i = 1; i <= gameRounds; i += 1) {
    const { question, rightAnswer } = runGameEven();
    const userAnswer = readlineSync.question(`Question: ${question} `);
    if (!getResult(rightAnswer, userAnswer)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { sayHello, gameProcess };

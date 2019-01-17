import readlineSync from 'readline-sync';

const gameRounds = 3;

const greetingUser = (rules = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? : ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getResult = (rightAnswer, userAnswer, userName) => {
  if (rightAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
    console.log(`Let's try again, ${userName}!`);
  }
};

const gameProcess = (rules = '', rightAnswer, userAnswer) => {
  const userName = greetingUser(rules);
  for (let i = 1; i <= gameRounds; i += 1) {
    getResult(rightAnswer, userAnswer, userName);
  }
  console.log(`Congratulations, ${userName}!`);
};

export { greetingUser, getResult, gameProcess };

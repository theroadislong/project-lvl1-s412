import readlineSync from 'readline-sync';

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? : ');
  console.log(`Hello, ${userName}!`);
  console.log('Games list: brain-even, brain-calc, brain-gcd, brain-prime, brain-progression');
};

export default sayHello;

const isEven = num => num % 2 === 0;
const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export { isEven, getRandomNumber };

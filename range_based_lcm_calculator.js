/**
 * This function takes an array of two numbers and returns the
 * least common multiple (LCM) of those two numbers and all the numbers
 * between them, usig the division/ladder method.
 */

const smallestCommons = (numbers) => {
  let arr = [];
  let arrOfPrimes;
  let range = [];
  let toAdd = 0;
  let toMultiply = [];

  // Ordering ascending
  numbers.sort((a, b) => a - b);

  // Obtaining an arr of numbers from the highest value
  // on the array until the lowest one
  for (let i = numbers[1]; i >= numbers[0]; i--) {
    arr.push(i);
  }

  // Obtaining an arr of numbers from the highest value on the arr until 2
  for (let i = numbers[1]; i >= 2; i--) {
    range.push(i);
  }

  // Obtaining all prime numbers in the range previously created
  arrOfPrimes = range.filter((number, index, array) =>
    array
      .slice(index + 1, array.lentgh)
      .every((element) => number % element !== 0),
  );

  while (true) {
    // Obtaining the first prime number that can divide one number from our arr
    for (const primeNumber of arrOfPrimes) {
      if (arr.some((n) => n % primeNumber === 0)) {
        toAdd = primeNumber;
        // Array pf prime numbers that divided at least one number
        // in our original array
        toMultiply.push(primeNumber);
        break;
      }
    }

    // Dividing each number on the array over that prime number
    // Only if it's an equal division
    arr.forEach((number, index, array) => {
      if (number % toAdd === 0) {
        arr[index] = number / toAdd;
      }
    });

    // Verifying when all numbers in the array are equal to 1
    // Which means they can't be divided by any prime number
    if (arr.every((element) => element === 1)) {
      break;
    }
  }

  // Multiplying all numbers in the array to obtain the Least Common Multiple
  const lcm = toMultiply.reduce((acc, cur) => acc * cur);

  return lcm;
};

console.log(smallestCommons([18, 23]));

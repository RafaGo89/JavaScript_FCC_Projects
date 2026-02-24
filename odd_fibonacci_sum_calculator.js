/**
 * This function computes the sum of all odd Fibonacci numbers that are 
 * less than or equal to a given positive integer.
 */

const sumFibs = (limit) => {
  let sum = 1;
  let currentOne = 1;
  let lastOne = 1;
  let pivot = 0;

  while (currentOne <= limit) {
    if (currentOne % 2 !== 0) {
      sum += currentOne;
    }
    pivot = currentOne;
    currentOne += lastOne;
    lastOne = pivot;
  }

  return sum;
};

console.log(sumFibs(75025));

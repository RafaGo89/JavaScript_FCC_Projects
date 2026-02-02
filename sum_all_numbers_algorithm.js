/**
 * sumAll([n, m]) should return the sum of n and m plus the sum
 * of all the numbers between them. The lowest number will
 * not always come first.
 */

const sumAll = (array) => {
  let sum = 0;
  let min = 0;
  let max = 0;

  if (array[0] > array[1]) {
    max = array[0];
    min = array[1];
  } else {
    max = array[1];
    min = array[0];
  }

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumAll([10, 5]));

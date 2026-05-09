/**
 *  This is a fuction hat takes a number and returns the sum
 * of all prime numbers that are less than or equal to that number.
 */

const sumPrimes = (number) => {
  if (number < 2) return 0;

  let range = [];
  let arrOfPrimes = [];
  let sum = 0;

  for (let i = number; i >= 2; i--) {
    range.push(i);
  }

  // Iterating over every element of the range
  arrOfPrimes = range.filter((number, index, array) =>
    array
      // Obtaining a slice of the original array, moving one position foward
      .slice(index + 1, array.lentgh)
      // Checking if the number can't be divided by each and every number of
      // the slice, that's a prime number
      .every((element) => number % element !== 0),
  );

  sum = arrOfPrimes.reduce((acc, cur) => acc + cur, 0);

  return sum;
};

console.log(sumPrimes(10));
console.log(sumPrimes(0));
console.log(sumPrimes(5));

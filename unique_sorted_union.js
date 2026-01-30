/**
 * The uniteUnique function should accept two or more arrays as arguments
 * and return a new array
 * that contains unique values from the
 * argument arrays, in the order they
 * are first found in the arguments.
 * For example, an input like [1, 2, 4], [2, 3, 5]
 * would have an output of [1, 2, 4, 3, 5].
 */

function uniteUnique(...arrays) {
  let sortedArray = [];

  for (const array of arrays) {
    for (const element of array) {
      if (!sortedArray.includes(element)) {
        sortedArray.push(element);
      }
    }
  }

  return sortedArray;
}

console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));

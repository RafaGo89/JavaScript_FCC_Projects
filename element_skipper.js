/**
 * This a function that skips elements in an array until it finds an
 * acceptable one based on a specific test function.
 */

const dropElements = (arr, func) => {
  const copyArr = [...arr];

  for (const element of copyArr) {
    if (func(element)) {
      break;
    }
    arr.shift();
  }

  return arr;
};

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
);
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
);
console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  }),
);

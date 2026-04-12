/**
 * Thos function that takes an initial array as its first argument,
 * followed by one or more additional arguments representing the
 * values to remove. The function should return a new array excluding
 * all elements from the first argument that match any of the
 * subsequent arguments.
 */

const destroyer = (arr, ...rest) => {
  const newArr = arr.filter((element) => !rest.includes(element));

  return newArr;
};

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(
  destroyer(
    [
      "possum",
      "trollo",
      12,
      "safari",
      "hotdog",
      92,
      65,
      "grandma",
      "bugati",
      "trojan",
      "yacht",
    ],
    "yacht",
    "possum",
    "trollo",
    "safari",
    "hotdog",
    "grandma",
    "bugati",
    "trojan",
  ),
);

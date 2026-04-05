/**
 * This function compares two arrays and returns a new array with any items
 * only found in one of the two given arrays, but not both. In other words,
 * return the symmetric difference of the two arrays.
 */

const diffArray = (arr1, arr2) => {
  // Filter the elements that only exist in one array
  const filteredArr1 = arr1.filter((element) => !arr2.includes(element));
  const filteredArr2 = arr2.filter((element) => !arr1.includes(element));

  const symmetricArr = filteredArr1.concat(filteredArr2);

  return symmetricArr;
};

const a = ["diamond", "stick", "apple"];
const b = ["stick", "emerald", "bread"];

console.log(diffArray(a, b));
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"],
  ),
);

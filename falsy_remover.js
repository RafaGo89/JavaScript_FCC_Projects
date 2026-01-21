/**
 * This lab contains a function that removes all
 * falsy values from an array
 */

function bouncer(array) {
  let newArray = [];

  for (const element of array) {
    if (Boolean(element)) {
      newArray.push(element);
    }
  }

  return newArray;
}

console.log(bouncer([null, NaN, 1, 2, undefined]));
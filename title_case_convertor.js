/**
 * This program contains a function that turns every
 * first letter of an array to upper case.
 */

function titleCase(str) {
  let newSentence = [];
  const strSplitted = str.split(/\s+/);

  for (let word of strSplitted) {
    // Converting first letter to Upper case and the rest to lower case
    word = word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();

    newSentence.push(word);
  }

  // Converting the array to a string
  newSentence = newSentence.join(" ");

  return newSentence;
}

console.log(titleCase("sHoRt AnD sToUt"));
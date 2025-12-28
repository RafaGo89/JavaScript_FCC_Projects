function fearNotLetter(str) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const firstLetterIndex = letters.indexOf(str[0]);
  const endIndex = firstLetterIndex + str.length;
  const slicedLetters = letters.slice(firstLetterIndex, endIndex);

  for (let i = 0; i <= str.length; i++) {
    if (str[i] !== slicedLetters[i]) {
      return slicedLetters[i];
    }
  }

  return undefined;
}

console.log(fearNotLetter("bcdf"));
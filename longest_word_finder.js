function findLongestWordLength(sentence) {
  let longestWord = '';
  const sentenceSplitted = sentence.split(/\s+/);

  for (const word of sentenceSplitted) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
function reverseString(str) {
  const strLength = str.length - 1;
  let invertedStr = "";

  for (let i = strLength; i >= 0; i--) {
    invertedStr += str[i];
  }

  return invertedStr;
}

console.log(reverseString("Greetings from Earth"))
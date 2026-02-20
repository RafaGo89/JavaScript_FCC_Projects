/**
 * This fucntions are about converting special characters in a string 
 * with their corresponding HTML entities.
 */

const getHTMLCharacter = (character) => {
  const htmlCharacters = [
    {
      char: "&",
      conversion: "&amp;",
    },
    {
      char: "<",
      conversion: "&lt;",
    },
    {
      char: ">",
      conversion: "&gt;",
    },
    {
      char: '"',
      conversion: "&quot;",
    },
    {
      char: "'",
      conversion: "&apos;",
    },
  ];

  for (const object of htmlCharacters) {
    if (object.char === character) {
      return object.conversion;
    }
  }

  return character;
};

const convertHTML = (str) => {
  let newStr = "";
  for (const character of str) {
    newStr += getHTMLCharacter(character);
  }

  return newStr;
};

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML('Stuff in "quotation marks"') );
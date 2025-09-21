// Variables
const character = "#";
const count = 8;
const rows = [];
let inverted = true;

// Function to add the characters and blank spaces
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// For loop to create the pyramid by adding characters to the array
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

// Printing the pyramid
for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
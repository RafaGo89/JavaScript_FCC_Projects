function chunkArrayInGroups(arr, sizeOfGroups) {
  const numberOfGroups = Math.ceil(arr.length / sizeOfGroups);
  let newArr = [];

  for (let i = 0; i < numberOfGroups; i++) {
    // Create a new row
    newArr[i] = [];
    for (let j = 0; j < sizeOfGroups; j++) {
      // Verify if the array has no more elements
      if (arr.length === 0) {
        break;
      }
      // Adding an element to the new row
      newArr[i][j] = arr.shift();
    }
  }

  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
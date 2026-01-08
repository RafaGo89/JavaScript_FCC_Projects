function frankenSplice(arr1, arr2, index) {
  const frankenArray = arr2.slice();

  for (const element of arr1) {
    frankenArray.splice(index, 0, element);
    index++;
  }
  
  return frankenArray;
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
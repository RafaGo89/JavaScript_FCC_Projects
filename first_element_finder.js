function findElement(arr, func) {
  for (const element of arr) {
    if (func(element)) {
      return element;
    }
  }

  return undefined;
}

console.log(findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; }));
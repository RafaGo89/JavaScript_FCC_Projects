const lunches = [];

function addLunchToEnd(arr, newLunch) {
  arr.push(newLunch);
  console.log(`${newLunch} added to the end of the lunch menu.`);

  return arr;
}

function addLunchToStart(arr, newLunch) {
  arr.unshift(newLunch);
  console.log(`${newLunch} added to the start of the lunch menu.`);

  return arr;
}

function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  }
  else {
    const removedLunch = arr.pop();
    console.log(`${removedLunch} removed from the end of the lunch menu.`);
  }
  
  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  }
  else {
    const removedLunch = arr.shift();
    console.log(`${removedLunch} removed from the start of the lunch menu.`);
  }
  
  return arr;
}

function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  }
  else {
    const randomIndex = Math.floor(Math.random() * ((arr.length - 1) - 0 + 1) + 0);
    console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
  }
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  }
  else {
    const arrFormatted = arr.join(", ");
    console.log("Menu items: " + arrFormatted);
  }
}
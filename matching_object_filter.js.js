/**
 *  This function filters an array of objects and returns only those 
 * objects that match all key-value pairs in a given source object.
 */

const whatIsInAName = (arr, filter) => {
  // Get all the keys from the filter
  const filterKeys = Object.keys(filter);

  // Get every individual object from the array, then to every indivual object we check if that object has an
  // element for every key of the filte
  const filteredArr = arr.filter(element => filterKeys.every(key => element[key] === filter[key]));

  return filteredArr;
}

console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1}));

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
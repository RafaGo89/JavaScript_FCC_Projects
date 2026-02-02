/*
 * This function matches the missing base pairs for the provided DNA strand.
 * For example, for the input ATCG, return [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]
 */

const pairElement = (sequence) => {
  let dnaPairs = [];

  for (const element of sequence) {
    let pair = [element];

    if (element.toUpperCase() === "A") {
      pair.push("T");
      dnaPairs.push(pair);
    } 
    else if (element.toUpperCase() === "T") {
      pair.push("A");
      dnaPairs.push(pair);
    } 
    else if (element.toUpperCase() === "C") {
      pair.push("G");
      dnaPairs.push(pair);
    } 
    else if (element.toUpperCase() === "G") {
      pair.push("C");
      dnaPairs.push(pair);
    }
  }

  return dnaPairs;
};

console.log(pairElement("ATCGA"));

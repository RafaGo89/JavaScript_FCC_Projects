let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property) {
  let contactFound = false;

  for (const contact of contacts) {
    if (contact.firstName === name && contact.hasOwnProperty(property)) {
      return contact[property];
    }
    else if (contact.firstName === name) {
      contactFound =  true;
      break;
    }
  }

  if (!contactFound) {
    return "No such contact";
  }
  
  return "No such property";
}

console.log(lookUpProfile("Akira", "address"));
/**
 * This script contains an array of books with title, author name and release year
 * as attributes. It also contains a compare function by year of release.
 * Then, it filters all books released before or on hyear 1950 and, finally,
 * sorts it by year of release.
 */

const books = [
  {
    title: "Frankenstein",
    authorName: "Mary Shelley",
    releaseYear: 1818,
  },
  {
    title: "Constelaciones de papel",
    authorName: "Lourdes Walls",
    releaseYear: 2021,
  },
  {
    title: "The war of the worlds",
    authorName: "Herbert George Wells",
    releaseYear: 1898,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }

  return 0;
}

const filteredBooks = books.filter((book) => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);

// Sort the array of numbers
/*
const arr = [3, 5, 1];
const result = arr.sort((a, b) => a - b);
console.log(arr, result);
*/
//  Output : [ 1, 3, 5 ] [ 1, 3, 5 ] -> Sorting in ascending Order

/*
const arr = [3, 5, 1];
const result = arr.sort((a, b) => b - a);
console.log(arr, result);
*/
//  Output : [ 5, 3, 1 ] [ 5, 3, 1 ] -> Sorting in Descending Order

// Sort array of objects by author's lastname

const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

books.sort((book1, book2) => {
  const authorLastName1 = book1.author.split(" ")[1];
  const authorLastName2 = book2.author.split(" ")[1];
  return authorLastName1 < authorLastName2 ? -1 : 1;
});

console.log(books);

/* output :
[
  { name: 'The Hunger Games', author: 'Suzanne Collins' },
  { name: 'Warcross', author: 'Marie Lu' },
  { name: 'Harry Potter', author: 'Joanne Rowling' }
]

*/

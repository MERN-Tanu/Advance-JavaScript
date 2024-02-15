const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6, 7];

console.log(array2);
// output :
//  [
//   1, 2, 3, 4,
//   5, 6, 7
// ]

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result);

//  output : 6

//  Shallow copying an object

// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3, d: 4, e: 5, f: 6 };

// console.log(obj2);

//  output : { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

//  merge two objects

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 6, f: 7 };

const mergeObj = { ...obj1, ...obj2 };

console.log(mergeObj);

//  Output : { a: 1, b: 2, c: 3, d: 4, e: 6, f: 7 }

// Write a function which can concatenate 2 arrays
// Write a function which get's an array and an element and returns a array with this element at the end
const numbers = [1, 2];
const append = (arr, el) => {
  return [...arr, el];
  //   arr.push(el);
  return arr;
};

const newNumbers = append(numbers, 3);
console.log(newNumbers);
console.log(numbers);

/*
[ 1, 2, 3 ]
[ 1, 2 ]
 
 */

// Write a function which can concatenate 2 arrays

const mergeArrays = (array1, array2) => {
  // array1.push(...array2); // this is not the correct approach
  // return array1.concat(...array2);
  return [...array1, ...array2];
};

const array1 = [1];
const array2 = [2, 3];
const result = mergeArrays(array1, array2);
console.log(result, array1, array2);

/*
Output : 

[ 1, 2, 3 ]
[ 1, 2 ]
[ 1, 2, 3 ] [ 1, 2, 3 ] [ 2, 3 ]

when we use the function Concate

[ 1, 2, 3 ]
[ 1, 2 ]
[ 1, 2, 3 ] [ 1 ] [ 2, 3 ]

when we use the [...args1,...args2]

[ 1, 2, 3 ]
[ 1, 2 ]
[ 1, 2, 3 ] [ 1 ] [ 2, 3 ]

*/

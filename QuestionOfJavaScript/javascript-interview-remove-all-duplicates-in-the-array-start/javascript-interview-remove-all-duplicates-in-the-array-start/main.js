// Remove all duplicates in the array

// const uniqueArr = (arr) => {
//   return [...new Set(arr)];
// };

// const result = uniqueArr([1, 2, 2, 4, 4, 5, 6, 7, 7, 8]);
// console.log(result);

/*
[
  1, 2, 4, 5,
  6, 7, 8
]

*/

//  2. Approach

// const uniqueArr = (arr) => {
//   const result = [];
//   arr.forEach((item) => {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   });

//   return result;
// };

// const result1 = uniqueArr([1, 9, 9, 7, 8, 8, 8]);
// console.log(result1);

/*
[ 1, 9, 7, 8 ]

*/

// 3. Appraoch :

const uniqueArr = (arr) => {
  return arr.reduce((acc, el) => {
    return acc.includes(el) ? acc : [...acc, ele];
  }, []);
};

/*
 output :
 
console.log(uniqueArr);
 (arr) => {
  return arr.reduce((acc, el) => {
    return acc.includes(el) ? acc : [...acc, ele];
  }, []);
}
 */

// const result = uniqueArr([1, 2, 3, 3, 3, 5, 5, 5, , 6]);
// console.log(result);

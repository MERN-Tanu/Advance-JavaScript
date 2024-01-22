let a = [2, 5, 8, 7, 9, 7];
let sum = 0;

let result = a.map((element, index) => {
  return element + 9;
});
console.log(result); // [ 11, 14, 17, 16, 18, 16 ]

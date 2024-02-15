//  Find the number of occurances of minimum value in the list

//  Math.min(...[1, 2, 3]);
// output : 1

const arr = [1, 2, 3];
const minValue = Math.min(...arr);
const minArray = arr.filter((ele) => ele === minValue);

console.log(minArray.length);

//  output : 1

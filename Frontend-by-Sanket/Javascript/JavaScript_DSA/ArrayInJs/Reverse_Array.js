//  Given an Array, write an algorithm to reverse the samee array.

// note : You should not create a new array

//  e.g. ->  [5,9,1,8,2,3]
//  ans :   [3,2,8,1,9,5]

function swap(arr, i, j) {
  //  function swaps the elements of the array at index i and j

  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [5, 9, 1, 8, 2, 3];

let i = 0; // starting index
let j = arr.length - 1; // ending index

while (i <= j) {
  swap(arr, i, j);
  i++;
  j--;
}

console.log(arr);

// Output : [ 3, 2, 8, 1, 9, 5 ]

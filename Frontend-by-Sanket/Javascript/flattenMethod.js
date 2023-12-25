// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// const arr1 = [0, 1, 2, [3, 4]];
// const arr2 = [0, 1, [2, [3, [4, 5]]]];

// console.log(arr1.flat());
// console.log(arr1.flat(2));
// console.log(arr1.flat(Infinity));

// console.log(arr2.flat());
// console.log(arr2.flat(1));
// console.log(arr2.flat(Infinity));
/***
 * output :
[ 0, 1, 2, 3, 4 ]
[ 0, 1, 2, 3, 4 ]
[ 0, 1, 2, 3, 4 ]
[ 0, 1, 2, [ 3, [ 4, 5 ] ] ]
[ 0, 1, 2, [ 3, [ 4, 5 ] ] ]
[ 0, 1, 2, 3, 4, 5 ]
 *
 */

//  Here creating custome Flat in polyfill :

Array.prototype.customFlat = function () {
  const res = [];

  function flatArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      const ele = arr[i];
      if (Array.isArray(ele)) {
        flatArray(ele);
      } else {
        res.push(ele);
      }
    }
  }
  flatArray(this);
  return res;
};

console.log([1, 2, 3, 4, [1, 2, [3, 4]]].customFlat());

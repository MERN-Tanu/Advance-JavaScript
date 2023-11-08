//  Higher order function: there are functions which take another function as arguments
//  these are called higher order function

function f(x, fn) {
  // x = number
  // fn = function
  console.log(x);
  fn();
}

f(10, function exec() {
  console.log("I am an Expression passed to a HOF");
});

// Unsorted array
let arr = [1, 10, 9, 100, 11, 12, 13, 14, 2, 3];
// it's sorts the given array
// [Expection]: This might arrange elements in inc order
//  Default implementation of arr.sort() is going to sort my array in lexicographical order
/**
 * 0 -> A
 * 1 -> B
 * 2 -> C
 * 3 -> D
 * 4 -> E
 * 5 -> F
 * 6 -> G
 * 7 -> H
 * 8 -> I
 * 9 -> J
 * 10 -> K
 * ...
//  * [B,BA,J,BAA,BB,BC,BD,BE,C,D] iF WE ARRANGE IT ACCORDING TO DICTIONARY
 * **/
arr.sort();
console.log(arr);

let b = [1, 10, 9, 100, 11, 12, 13, 14, 2, 3];

// sort b in increasing order
b.sort(function (a, b) {
  // if a<b -> a-b will be negative -> if comparator function gives negative then a is placed before b (a<b)
  // if a>b -> a-b will be positive -> if comparator function gives positive the b is placed before a (a>b)
  return a - b;
  // sort is a HOF ,,the sort function takes a comparator function as argument
});
console.log(b);

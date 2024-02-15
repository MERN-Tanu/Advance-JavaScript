// Method : 2

/*
1. Split() : the string into an array of characters
2. Reverse() : the order of elements in the elements
3. Join() : the characters back together into a string
*/

function reverseString(str) {
  /*
  split("") => split without space return you the array of characters separated by comma (,).

  split(" ") => split with one spcace return you the array of string separated by comma (,).
  
  */
  return str.split("").reverse().join("");
}

console.log(reverseString("tanu"));

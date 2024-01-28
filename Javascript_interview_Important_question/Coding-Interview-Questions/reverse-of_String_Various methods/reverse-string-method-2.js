// Method : 2

/*
1. Split() : the string into an array of characters
2. Reverse() : the order of elements in the elements
3. Join() : the characters back together into a string
*/

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("tanu"));

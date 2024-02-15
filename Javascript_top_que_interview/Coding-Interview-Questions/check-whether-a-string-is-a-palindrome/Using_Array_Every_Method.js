/* Syntax of every function :

It is  HOF (Higher order function) 

array.every(callback(element, index, array), thisArg);

every is a higher-order function in JavaScript that takes a callback 
function as an argument. Its purpose is to check whether all elements 
in an array (or iterable) satisfy a given condition 
specified by the provided callback function.


callback: A function that tests each element of the array. It receives three parameters:

element: The current element being processed in the array.

index: The index of the current element.

array: The array on which every was called.

thisArg (optional): An object to which the this keyword can refer in the callback function. 

If omitted, it defaults to the global object.

The purpose of every is to return true if the callback function returns true for every 
element in the array. If any element fails the test 
(returns false in the callback), every returns false.

*/

function isPalindrome(str) {
  console.log(str);
  /*
  split("") => split without space return you the array of characters separated by comma (,).

  split(" ") => split with one spcace return you the array of string separated by comma (,).
  
  */
  return str.split("").every((char, i) => char === str[str.length - 1 - i]);
}

console.log(isPalindrome("mom")); // true
console.log(isPalindrome("label")); // false

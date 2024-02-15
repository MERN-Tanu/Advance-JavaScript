// Write a function which checks if string is a palindrome

//  MOM, fof are palindrome

const isPalindrome = function (str) {
  return str === str.split("").reverse().join("");
};

const a = isPalindrome("mom");
const b = isPalindrome("mob");
console.log(a);
console.log(b);

/*
true
false
 */

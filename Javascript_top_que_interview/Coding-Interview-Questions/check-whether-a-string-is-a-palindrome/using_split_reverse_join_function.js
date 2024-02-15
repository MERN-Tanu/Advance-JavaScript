function isPalindrome(str) {
  console.log(str); // tanu

  /*
  split("") => split without space return you the array of characters separated by comma (,).

  split(" ") => split with one spcace return you the array of string separated by comma (,).
  
  */

  const reversedStr = str.split("").reverse().join("");
  console.log(reversedStr); // unat
  return str === reversedStr; // false
}

console.log(isPalindrome("mom"));
console.log(isPalindrome("tanu"));

/*
      mom
      mom
      true
      tanu
      unat
      false
*/

/*
Dry Run:

First Call: isPalindrome("mom")

str is "mom".

reversedStr is obtained by splitting, reversing, 
and joining the characters of the string, resulting in "mom".
The function returns true because "mom" reads the same backward and forward.


Second Call: isPalindrome("tanu")

str is "tanu".
reversedStr is obtained by splitting, reversing, 
and joining the characters of the string, resulting in "unat".

The function returns false because "tanu" does not 
read the same backward and forward.

So, the final output is:


mom
mom
true

tanu
unat
false

The code correctly identifies whether the input strings are palindromes or not.

*/

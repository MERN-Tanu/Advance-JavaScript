/*
A pangram is a sentence containing every letter in the English Alphabet.

Examples: 

Input: “The quick brown fox jumps over the lazy dog” 
Output: is a Pangram 
Explanation: Contains all the characters from ‘a’ to ‘z’] 

*/

function isPangram(str) {
  let newStr = str.replaceAll(" ", "");

  newStr = new Set(newStr);
  //   console.log(newStr.size);// size in set not length

  return newStr.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));

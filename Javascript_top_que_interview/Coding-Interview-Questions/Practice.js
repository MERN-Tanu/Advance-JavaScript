// function isPalindrome(str) {
//   let len = str.length;

//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPalindrome("racecar"));

// function isAngram(str1, str2) {
//   const sortedStr1 = str1.split("").sort().join("");
//   const sortedStr2 = str2.split("").sort().join("");

//   if (sortedStr1 === sortedStr2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isAngram("liste", "silent"));

// function findLongest(sentense) {
//   let word = sentense.split(" ");

//   let longestWord = "";

//   for (let i = 0; i < word.length; i++) {
//     if (word[i].length > longestWord.length) {
//       longestWord = word[i];
//     }
//   }
//   return longestWord;
// }

// console.log(findLongest("I hope you are doing well"));

// function isPangram(str) {
//   let newStr = str.replaceAll(" ", "");
//   newStr = new Set(newStr);

//   return newStr.size === 26;
// }

// console.log(isPangram("the quick brown fox jumps over the lazy dog"));

// function removeDuplicates(arr) {
//   const uniqueArrayElement = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueArrayElement.indexOf(arr[i]) === -1) {
//       uniqueArrayElement.push(arr[i]);
//     }
//   }
//   return uniqueArrayElement;
// }
// console.log(removeDuplicates([1, 2, 3, 3, 4, 8, 8, 9, 5, 5]));

// function reverseString(str) {
//   let reverse = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse = reverse + str[i];
//   }
//   return reverse;
// }

// console.log(reverseString("tanu"));

// function removeWhiteSpace(str) {
//   let result = "";
//   for (let char of str) {
//     if (char !== " ") {
//       result = result + char;
//     }
//   }
//   return result;
// }

// console.log(removeWhiteSpace("hello,I hope you are doing well"));

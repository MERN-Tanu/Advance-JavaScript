function isPalindrome(str) {
  const cleanstr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log("cleanstr", cleanstr); // cleanstr mom

  const reversedStr = cleanstr.split("").reverse().join("");
  console.log("reversedStr", reversedStr); //reversedStr mom

  return cleanstr === reversedStr; // true
}

console.log(isPalindrome("Mom@")); // true
console.log(isPalindrome("mom@#$%")); // true

/*
Dry Run:

Function Call: isPalindrome("Mom")

str is "Mom".

The replace(/[^a-zA-Z0-9]/g, "") removes non-alphanumeric 
characters and converts the string to lowercase, 
resulting in "mom".

The cleaned and lowercase string is logged: "cleanstr mom".

The split("").reverse().join("") reverses the cleaned string: "mom".

The reversed string is logged: "reversedStr mom".

Since the cleaned string is the same as its reversed version, the function returns true.

Function Call: isPalindrome("mom")

str is "mom".

The cleaning and reversing process is the same as explained above.

The final output is also true because "mom" is a palindrome.

The output for both calls is:


cleanstr mom
reversedStr mom
true

*/

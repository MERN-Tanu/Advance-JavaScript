// 1. count the frequency of each character in both strings.
// 2. Compare the frequency counts to check if they are equal.
// 3. this apprach can be implemented by array and Object in Js
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false; // Anagrams must have the same length
  }

  const charCount1 = {};
  const charCount2 = {};

  // Count frequency of characters in str1
  for (let char of str1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  // Count frequency of characters in str2
  for (let char of str2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // Compare the frequency counts
  for (let char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false; // Frequency counts don't match
    }
  }

  return true; // Frequency counts match for all characters
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false

/*
Example: isAnagram("listen", "silent")

Step 1: Check if the lengths are equal

Both "listen" and "silent" have the same length (6), so continue.

Step 2: Count the frequency of characters in str1 and str2

charCount1: { l: 1, i: 1, s: 2, t: 1, e: 1, n: 1 }
charCount2: { s: 1, i: 1, l: 1, e: 1, n: 1, t: 1 }

Step 3: Compare the frequency counts

For each character in charCount1, 
check if the frequencies match in charCount2

(l: 1, i: 1, s: 2, t: 1, e: 1, n: 1) => 
Frequencies match in charCount2

Conclusion: All frequencies match for each character,
 so it's an anagram.
Result: true

*/

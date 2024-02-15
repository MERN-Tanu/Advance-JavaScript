// Wrong code - don't revise

function isAnagram(str1, str2) {
  const charCount1 = {};
  const charCount2 = {};

  for (let char of str1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
    console.log(charCount1);
    console.log("char", char);
  }

  for (let char of str2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
    console.log(charCount2);
    console.log(char);
  }

  // compare the frequency counts
  return JSON.stringify(charCount1) === JSON.stringify(charCount2);
}

console.log(isAnagram("listen", "ilent"));

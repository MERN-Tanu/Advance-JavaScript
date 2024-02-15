// solving this problem by using regex : /\s/g
/*
\s: Matches any whitespace character (spaces, tabs, 
    and line breaks).

g: Global flag to match all occurrences.

*/
function removeWhiteSpace(str) {
  const result = str.replace(/\s/g, "");
  // "" =This means that all whitespace characters will
  // be replaced with an empty string.
  return result;
}

console.log(removeWhiteSpace("hello, tanu  how are you"));

// hello,tanuhowareyou

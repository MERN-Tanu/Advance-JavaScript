// 1. Using for loop :

function findlongestWord(sentense) {
  let word = sentense.split(" "); // always give one space b/w the quotes
  console.log(word); // [ 'I', 'love', 'coding', 'in', 'JavaScript' ]
  let longestWord = ""; // taking this empty string that will store the longest word of the sentense

  console.log(longestWord); // "" -> Empty string

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > longestWord.length) {
      longestWord = word[i];
      console.log(word[i]);
      /*
        I
        love
        coding
        JavaScript
      */
    }
  }
  return longestWord;
}

/*

Dry Run:

words is assigned the array ["I", "love", "coding", "in", "JavaScript"].

longestWord is initialized as an empty string.

Loop starts:

Iteration 1: "I" is not longer than an empty string, so no change.
Iteration 2: "love" is longer than an empty string, so longestWord becomes "love".
Iteration 3: "coding" is longer than "love", so longestWord becomes "coding".
Iteration 4: "in" is not longer than "coding", so no change.
Iteration 5: "JavaScript" is longer than "coding", so longestWord becomes "JavaScript".
The function returns "JavaScript".

console.log(findLongestWord("I love coding in JavaScript")) outputs "JavaScript".

So, the final output is:

["I", "love", "coding", "in", "JavaScript"]
""
love
coding
JavaScript
JavaScript


*/

console.log(findlongestWord("I love coding in JavaScript"));

// output : JavaScript

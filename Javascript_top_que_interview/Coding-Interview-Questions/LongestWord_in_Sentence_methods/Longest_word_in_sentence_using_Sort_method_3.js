// Using Sort function :

function findLongestWord(sentence) {
  let word = sentence.split(" ");
  console.log(word); // [ 'I', 'hope', 'you', 'are', 'doing', 'well' ]

  const sortedWord = word.sort((a, b) => b.length - a.length);

  console.log(sortedWord);

  // [ 'doing', 'hope', 'well', 'you', 'are', 'I' ]
  //  sorting is giving you the longest word length
  //  in the sentence , with respect to the length of the word

  const longestWord = sortedWord[0];
  console.log(sortedWord[0]); // doing
  console.log(longestWord); // doing
  return longestWord; // doing
}

console.log(findLongestWord("I hope you are doing well"));

/*
    [ 'I', 'hope', 'you', 'are', 'doing', 'well' ]
    doing
    doing
    doing

*/

/*

Certainly! Let's dry run the provided code step by step:



Using Sort function :

function findLongestWord(sentence) {
  let words = sentence.split(" ");
  console.log(words); 
   Output: [ 'I', 'hope', 'you', 'are', 'doing', 'well' ]

  const sortedWords = words.sort((a, b) => b.length - a.length);

  console.log(sortedWords);
  Output: [ 'doing', 'hope', 'well', 'you', 'are', 'I' ]
   Sorting is giving you the longest word
 in the sentence, with respect to the length of the word

  const longestWord = sortedWords[0];
  console.log(sortedWords[0]);
 Output: doing
  console.log(longestWord);
  Output: doing
  return longestWord;
   Output: doing
}

console.log(findLongestWord("I hope you are doing well"));

/*
    [ 'I', 'hope', 'you', 'are', 'doing', 'well' ]
    [ 'doing', 'hope', 'well', 'you', 'are', 'I' ]
    doing
    doing
*/

/*
Dry Run:

sentence is "I hope you are doing well".

words is assigned the array ['I', 'hope', 'you', 'are', 'doing', 'well'].

sortedWords is assigned the result of sorting words based on the length of each word in descending order.

The sorted array is ['doing', 'hope', 'well', 'you', 'are', 'I'].

longestWord is assigned the first element of sortedWords, which is the longest word.

The function returns "doing".

console.log(findLongestWord("I hope you are doing well")) outputs "doing".

So, the final output is:

[ 'I', 'hope', 'you', 'are', 'doing', 'well' ]
[ 'doing', 'hope', 'well', 'you', 'are', 'I' ]
doing
doing

*/

/*

Sorting Numbers in Descending Order:

const numbers = [8, 3, 11, 6, 14];
numbers.sort((a, b) => b - a);

b-a => In the Descending order it will print
a-b => in the ascending order it will print

console.log(numbers); // Output: [14, 11, 8, 6, 3]

*/

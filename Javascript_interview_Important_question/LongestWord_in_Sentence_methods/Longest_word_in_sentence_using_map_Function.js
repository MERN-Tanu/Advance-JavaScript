// Using Map and Find method :

function findLongestWord(sentence) {
  const words = sentence.split(" "); // " " -> always give single space

  console.log("word", words); // word [ 'Hope', 'you', 'are', 'doing', 'well' ]

  const wordlength = words.map((word) => word.length);

  // here map function gives the length of every word present in the sentence

  console.log("wordlength", wordlength); // wordlength [ 4, 3, 3, 5, 4 ]

  const maxlength = Math.max(...wordlength);

  console.log("...wordLength", ...wordlength); // ...wordLength 4 3 3 5 4

  console.log("maxlength", maxlength); // maxlength 5

  const longestWord = words.find((word) => word.length === maxlength);

  console.log(longestWord); // doing

  return longestWord; // doing
}

console.log(findLongestWord("Hope you are doing well"));

/* 
  output: 
   
            word [ 'Hope', 'you', 'are', 'doing', 'well' ]
            wordlength [ 4, 3, 3, 5, 4 ]
            ...wordLength 4 3 3 5 4
            maxlength 5
            doing
            doing
*/

/*
        Dry Run:

        sentence is "Hope you are doing well".
        
        words is assigned the array ["Hope", "you", "are", "doing", "well"] after splitting the sentence.
        
        wordLength is assigned the array [4, 3, 3, 5, 4], representing the length of each word in the words array.
        
        maxLength is assigned the maximum value in wordLength, which is 5.
        
        longestWord is assigned the first word in the words array for which the length is equal to maxLength, which is "doing".
        
        The function returns "doing".
        
        console.log(findLongestWord("Hope you are doing well")) outputs "doing".
        
        So, the final output is:


        word [ 'Hope', 'you', 'are', 'doing', 'well' ]
        wordlength [ 4, 3, 3, 5, 4 ]
        ...wordLength 4 3 3 5 4
        maxlength 5
        doing

*/

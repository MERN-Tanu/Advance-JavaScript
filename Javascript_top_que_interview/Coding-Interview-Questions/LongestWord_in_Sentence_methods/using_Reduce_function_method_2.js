/* Using Reduce Method :
   
    The reduce function in JavaScript is used 
    to reduce an array to a single value. 
    It iterates over each element of the array and
    applies a callback function
    that you provide, accumulating the result as it goes.
  
*/

function findLongestWord(sentense) {
  let word = sentense.split(" "); // here word is an Array
  console.log(word); //
  const longestWord = word.reduce((longest, current) => {
    // here the word is : [ 'I', 'hope', 'you', 'are', 'doing', 'well' ]

    return current.length > longest.length ? current : longest;
  }, ""); // "" initially the longestWord is Empty
  console.log(word); // [ 'I', 'hope', 'you', 'are', 'doing', 'well' ]

  return longestWord; // doing
}

console.log(findLongestWord("I hope you are doing well"));

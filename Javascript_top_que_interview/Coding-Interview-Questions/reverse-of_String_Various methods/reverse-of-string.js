// 1. Method :
function reverseString(str) {
  /*
  initialise an empty string to store 
  the reverse string
  
  */
  let reversed = "";
  /*
 Iterate through the characters of the 
 input string in reverse order
*/
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
    // console.log(reversed);
  }
  return reversed;
}
console.log(reverseString("Prashant")); // output: tnahsarP

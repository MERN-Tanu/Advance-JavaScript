function isPalindrome(str) {
  const len = str.length;
  console.log(str); // racecar

  for (let i = 0; i < len / 2; i++) {
    console.log(i); // 0,1,2,3
    if (str[i] !== str[len - 1 - i]) {
      // str[len - 1 - i] =  this means we are iterating
      // from the end of  the string : len = str.length and len/2 = 7/2 = 3.5 ~ 3
      // len-1-i

      /*
The expression str[len - 1 - i] is used to access the character in the 
string str that corresponds to the symmetric position 
to str[i] from the end of the string. 
This is commonly used when checking for palindromes, 
where characters are compared from both ends towards the center.

To understand the expression, let's break it down:

i: Current index in the loop from the start of the string.

len - 1: The last index in the string (since indexing is 0-based).

len - 1 - i: The symmetric position to i from the end of the string.

If you're encountering issues with this expression, ensure the following:

Valid Indices: Make sure that the indices i and len - 1 - i are 
within the valid range for the string. 
For example, if i is 3, then len - 1 - i should be a valid index.

String Length: Confirm that the length of the string is 
sufficient to accommodate the indices being used.
 */

      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar"));

/*

Certainly! Let's perform a dry run of your code step by step:


function isPalindrome(str) {
  const len = str.length;
  console.log(str); // racecar

  for (let i = 0; i < len / 2; i++) {
    console.log(i); // 0, 1, 2, 3
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar"));
/*
  Output:
  racecar
  0
  1
  2
  3
*/

/*
Dry Run:

Function Call: isPalindrome("racecar")


str is "racecar".

len is the length of the string, which is 7.

The loop runs for i = 0, 1, 2, 3 because len / 2 is 3.5 (integer division gives 3).

In each iteration, the function compares characters at i and len - 1 - i.

The loop completes without encountering a mismatch, so the 
function returns true indicating that "racecar" is a palindrome.

So, the final output is:


racecar
0
1
2
3

*/

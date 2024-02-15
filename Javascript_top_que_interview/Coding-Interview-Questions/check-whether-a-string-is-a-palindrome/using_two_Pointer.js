function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    // console.log(start); // 0
    // console.log(end); // 6
    if (str[start] != str[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
}

console.log(isPalindrome("racecar")); // true

/*
Dry Run:

start is initialized to 0, and end is initialized to the 
length of the string minus 1 (6 for "racecar").

In the first iteration of the while loop, start is 0, and end is 6.

The condition str[start] != str[end] is false (because "r" at position 0 is 
equal to "r" at position 6).

start is incremented to 1, and end is decremented to 5.

The loop continues since start is still less than or equal to end.

In the next iteration, the condition is checked again, and the process continues.

The loop will continue until start becomes greater than end.

The function returns true because the loop completes without encountering a mismatch.

So, the final output is true for the input "racecar," indicating that it is a palindrome.


*/

//  https://leetcode.com/problems/single-number/

/*
 Approach 1:
  [4,1,2,1,3,2,3]

  {
      1: 2,
      2: 2,
      3: 2,
      4: 1
  }

  Approach 2:

  Bitwise XOR :

  a  b   result
  0  0     0
  0  1     1
  1  0     1
  1   1    0

  then in XOR operation if we XOR two same values, the output is zero,
  whereas Xor of a value with 0, gives the same value

  [4,1,2,1,3,2,3]

  4 ^ 1 ^ 2 ^ 1 ^ 3 ^ 2 ^ 3

  4 ^ 0 -> 4

*/

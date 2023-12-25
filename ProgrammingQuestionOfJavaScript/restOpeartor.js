/*  the rest parameter syntax allows a function to
 accept an indefinite number of arguments as an array,
  providing a represent variadic function in JavaScript.

*/
//  Example : 1

/* 

function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }

  return total;
}

console.log(sum(1, 2, 3));
//  Expected output : 6

console.log(sum(1, 2, 3, 4));
//  Expected output : 10

*/

//  Example 2 :

function myfun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myfun("one", "two", "three", "four", "five", "six");

/* Output : 
a one
b two
manyMoreArgs [ 'three', 'four', 'five', 'six' ]

*/

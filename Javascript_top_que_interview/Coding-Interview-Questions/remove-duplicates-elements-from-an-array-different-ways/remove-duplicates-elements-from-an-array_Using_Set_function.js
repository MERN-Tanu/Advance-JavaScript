const array = [1, 2, 3, 4, 4, 4, 5, "hello", "hello"];

const uniqueArray = [...new Set(array)];

console.log(uniqueArray); // [ 1, 2, 3, 4, 5,'hello' ]

/*
Dry Run:

Initialization:

array is initialized with values [1, 2, 3, 4, 4, 4, 5, "hello", "hello"].
Set Usage:

The new Set(array) creates a Set from the array, 
automatically removing duplicate values.

The Set now contains [1, 2, 3, 4, 5, 'hello'].

Spread Operator:

The spread operator ... is used to spread the 
elements of the Set into a new array uniqueArray.

Logging:

The console.log(uniqueArray) prints the unique 
elements of the array.

The output is [1, 2, 3, 4, 5, 'hello'].

The code successfully removes duplicate elements 
from the original array, and the result 
is an array containing only unique values.

*/

const array = [1, 2, 3, 4, 4, 5];

const uniqueArray = [];

array.forEach((value) => {
  if (uniqueArray.indexOf(value) === -1) {
    uniqueArray.push(value);
  }
  console.log(value);
  /*
                1
                2
                3
                4
                4
                5

*/
});

console.log(uniqueArray);

// [ 1, 2, 3, 4, 5 ]

/*
array is defined as [1, 2, 3, 4, 4, 5].

An empty array uniqueArray is initialized.

The forEach loop iterates through each element of the array.

Iteration 1:

value is 1.

The condition uniqueArray.indexOf(value) === -1 is true 
because 1 is not in uniqueArray. So, 
1 is pushed into uniqueArray.
uniqueArray becomes [1].

Iteration 2:

value is 2.

The condition is true since 2 is not in uniqueArray. 
2 is pushed into uniqueArray.
uniqueArray becomes [1, 2].

Iteration 3:

value is 3.

The condition is true since 3 is not in uniqueArray. 
3 is pushed into uniqueArray.
uniqueArray becomes [1, 2, 3].

Iteration 4:

value is 4.

The condition is true since 4 is not in uniqueArray.
 4 is pushed into uniqueArray.
uniqueArray becomes [1, 2, 3, 4].

Iteration 5:

value is 4.

The condition is false since 4 is already in uniqueArray.
uniqueArray remains [1, 2, 3, 4].
Iteration 6:

value is 5.

The condition is true since 5 is not in uniqueArray. 
5 is pushed into uniqueArray.
uniqueArray becomes [1, 2, 3, 4, 5].
The loop completes, and the final uniqueArray is [1, 2, 3, 4, 5].

The final console.log(uniqueArray) outputs [1, 2, 3, 4, 5].

The code effectively removes duplicate elements from the 
original array and stores the unique elements in 
uniqueArray, similar to the previous 
implementation using includes.
*/

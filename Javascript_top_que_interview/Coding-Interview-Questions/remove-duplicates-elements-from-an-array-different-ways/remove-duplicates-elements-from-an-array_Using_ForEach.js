const array = [1, 2, 3, 4, 4, 5];

const uniqueArray = [];
array.forEach((value) => {
  if (!uniqueArray.includes(value)) {
    uniqueArray.push(value);
  }
  console.log(uniqueArray);

  /*
            [ 1 ]
            [ 1, 2 ]
            [ 1, 2, 3 ]
            [ 1, 2, 3, 4 ]
            [ 1, 2, 3, 4 ]
            [ 1, 2, 3, 4, 5 ]
            [ 1, 2, 3, 4, 5 ]
  
  */
  console.log(value);

  /*
                [ 1 ]
                1
                [ 1, 2 ]
                2
                [ 1, 2, 3 ]
                3
                [ 1, 2, 3, 4 ]
                4
                [ 1, 2, 3, 4 ]
                4
                [ 1, 2, 3, 4, 5 ]
                5
                [ 1, 2, 3, 4, 5 ]
  */
});

console.log(uniqueArray);

/*
array is defined as [1, 2, 3, 4, 4, 5].

An empty array uniqueArray is initialized.

The forEach loop iterates through each element of the array.

Iteration 1:

value is 1.
Since 1 is not in uniqueArray, it gets pushed into it.
uniqueArray becomes [1].
Iteration 2:

value is 2.
Since 2 is not in uniqueArray, it gets pushed into it.
uniqueArray becomes [1, 2].
Iteration 3:

value is 3.
Since 3 is not in uniqueArray, it gets pushed into it.
uniqueArray becomes [1, 2, 3].
Iteration 4:

value is 4.
Since 4 is not in uniqueArray, it gets pushed into it.
uniqueArray becomes [1, 2, 3, 4].
Iteration 5:

value is 4.
Since 4 is already in uniqueArray, it's not pushed again.
uniqueArray remains [1, 2, 3, 4].
Iteration 6:

value is 5.
Since 5 is not in uniqueArray, it gets pushed into it.
uniqueArray becomes [1, 2, 3, 4, 5].
The loop completes, and the final uniqueArray is [1, 2, 3, 4, 5].

The final console.log(uniqueArray) outputs [1, 2, 3, 4, 5].

The code effectively removes duplicate elements from the 
original array and stores the unique elements in uniqueArray.

*/

const array = [1, 2, 3, 4, 4, 5, "hello"];

const uniqueArrayElements = array.filter(
  (value, index, array) => array.indexOf(value) === index
);
// The indexOf method is a JavaScript array method that is
//used to find the first occurrence of a specified value within an array

/*
        filter((value,index,array)=> self.indexOf(value) === index)
        
        value: The current element being processed.
        index: The index of the current element in the array.
        self: The array on which the filter method is called (in this case, array).

*/

console.log(uniqueArrayElements); // [ 1, 2, 3, 4, 5, 'hello' ]

/*
Initialize the array with elements [1, 2, 3, 4, 4, 5, "hello"].

Create an empty array uniqueArrayElements.

The filter method iterates over each element in the array.

For each element, the callback function is called with parameters value,
 index, and self.

 Inside the callback function:

 value represents the current element (e.g., 1, 2, 3, 4, 5, "hello").

 index represents the index of the current element in the array.

 self is the array itself (array).

 The callback function checks if the index of the first occurrence of the current value in the array (self) is equal to the current index.

 If they are equal, it means the current value is the first occurrence 
 in the array, and it passes the filter.

If they are not equal, it means the current value is not the 
first occurrence, and it is filtered out.

The resulting array uniqueArrayElements contains only the elements 
that are the first occurrences in the original array.

After the dry run, the console.log(uniqueArrayElements) will output:



[1, 2, 3, 4, 5, "hello"]
This array contains only the unique elements from the original array

*/

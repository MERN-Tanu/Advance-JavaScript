function removeDuplicates(arr) {
  console.log("arr", arr); // arr [ 1, 2, 3, 4, 4, 4, 5, 6, 6, 'hello', 'hello' ]

  const uniqueArrayElement = [];

  console.log("uniqueArrayElement", uniqueArrayElement); // uniqueArrayElement []

  for (let i = 0; i < arr.length; i++) {
    /*
    The indexOf method returns the index of the first
    occurrence of a specified value in an array.
    If the specified value is not found in the array,
    indexOf returns -1.
    */
    if (uniqueArrayElement.indexOf(arr[i]) === -1) {
      /*
        const array = [1, 2, 3, 4, 4, 5, 5];
        Find the index of value 4 in the array
        const index = array.indexOf(4);
        console.log(index);  // Output: 3

        In the array [1, 2, 3, 4, 4, 5, 5], 
        the value 4 first appears at index 3. 
        The indexOf method returns the index of 
        the first occurrence of the specified value
         in the array.
        */
      console.log("uniqueArrayElement", uniqueArrayElement); // uniqueArrayElement []

      console.log("arr[i]", arr[i]);

      /*
        arr[i] 1
       
        uniqueArrayElement [ 1 ]
        arr[i] 2
        
        uniqueArrayElement [ 1, 2 ]
        arr[i] 3
       
        uniqueArrayElement [ 1, 2, 3 ]
        arr[i] 4
        
        uniqueArrayElement [ 1, 2, 3, 4 ]
        arr[i] 5
       
        uniqueArrayElement [ 1, 2, 3, 4, 5 ]
        arr[i] 6
        
        uniqueArrayElement [ 1, 2, 3, 4, 5, 6 ]
        arr[i] hello
      */

      uniqueArrayElement.push(arr[i]);
    }
  }

  return uniqueArrayElement; // [ 1, 2, 3, 4, 5, 6, 'hello' ]
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 4, 5, 6, 6, "hello", "hello"]));

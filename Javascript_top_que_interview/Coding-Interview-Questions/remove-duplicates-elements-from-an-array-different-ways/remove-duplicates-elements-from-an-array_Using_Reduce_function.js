const array = [1, 2, 3, 4, 4, 5];

/*
Syntax of Reduce Method:  array.reduce(callback, initialValue);

array: The array to be reduced.

callback: A function that defines how the reduction should take place.
 It receives four parameters:

accumulator: The accumulated result.

currentValue: The current element being processed.

currentIndex: The index of the current element.

array: The original array being traversed.

initialValue (optional): An initial value for the accumulator. 
If not provided, the first element of the array is used as the 
initial accumulator value.

The reduce method works by applying the callback function to each 
element of the array, updating the accumulator with each iteration. 
The final result is the accumulated value.
 
*/
const uniqueArray = array.reduce((accumulator, currentValue) => {
  // here , i am using accumulator where it will accumulte result, just like container.

  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }

  return accumulator;
}, []);

console.log(uniqueArray); // [ 1, 2, 3, 4, 5 ]

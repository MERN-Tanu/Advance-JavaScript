```
JavaScript Link : https://coderdost.github.io/
```

# Promises in JavaScript

1. Before promise we used to depend on callback functions which would result in 
1.) Callback Hell (Pyramid of doom)  2.) Inversion of control
2. Inversion of control is overcome by using promise.
   
1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
2) A promise has 3 states: pending | fulfilled | rejected.

Promises in JavaScript are a pattern for handling asynchronous operations. They provide a cleaner and more readable way to deal with asynchronous code compared to traditional callback functions. A promise represents the eventual completion or failure of an asynchronous operation and its resulting value.

A promise has three states:

1. **Pending:** The initial state; the promise is neither fulfilled nor rejected.

2. **Fulfilled:** The operation completed successfully, and the promise has a resulting value.

3. **Rejected:** The operation failed, and the promise has a reason for the failure.

Here's a basic example of using a promise:

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation (e.g., fetching data)
  setTimeout(() => {
    const success = true; // Set to false to simulate rejection
    if (success) {
      resolve('Operation completed successfully!');
    } else {
      reject('Operation failed!');
    }
  }, 2000); // Simulating a delay of 2 seconds
});

// Handling the promise
myPromise
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

In this example:

- The `Promise` constructor takes a function with two arguments: `resolve` and `reject`. These are functions provided by the JavaScript runtime.

- Inside the function, you perform your asynchronous operation. When it's complete, you call `resolve` with the result if successful or `reject` with an error if there's a failure.

- The `then` method is used to handle the fulfillment of the promise (i.e., when `resolve` is called). It takes a callback function that will be executed with the resolved value.

- The `catch` method is used to handle the rejection of the promise (i.e., when `reject` is called). It takes a callback function that will be executed with the reason for the rejection.

Promises can be chained together, and you can use the `finally` method to specify code that should be executed regardless of whether the promise is fulfilled or rejected.

```javascript
myPromise
  .then((result) => {
    console.log('Success:', result);
    return 'Additional data'; // Chaining
  })
  .then((additionalData) => {
    console.log('Chained success with additional data:', additionalData);
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('This code runs regardless of success or failure.');
  });
```

Promises play a crucial role in modern JavaScript, especially when dealing with asynchronous operations like AJAX requests, file reading, and other tasks that might take time to complete. They simplify error handling and improve the readability of asynchronous code.
















# Difference between 'for..of' and 'foreach' in JavaScript

The `for...of` loop and `forEach` are both used for iterating over elements in an iterable object like an array, 
but they have some differences in terms of syntax and behavior.

1. **Syntax:**
   - `for...of`: It's a newer syntax introduced in ECMAScript 6 (ES6). It provides a concise and readable way to iterate over iterable objects.
  
     ```javascript
     const myArray = [1, 2, 3, 4, 5];
     for (const value of myArray) {
       console.log(value);
     }
     ```

   - `forEach`: It is a method that belongs to the `Array` prototype and was introduced in ECMAScript 5 (ES5).

     ```javascript
     const myArray = [1, 2, 3, 4, 5];
     myArray.forEach(function(value) {
       console.log(value);
     });
     ```

2. **Usage:**
   - `for...of`: It can be used with any iterable object, not just arrays. It works with strings, maps, sets, etc.
   - It also supports custom iterable objects as long as they implement the iterable protocol.

   - `forEach`: It is a method specifically designed for arrays. It cannot be used directly on other iterable objects.

3. **Breaking the Loop:**
   - `for...of`: It supports the `break` statement to exit the loop prematurely.

     ```javascript
     const myArray = [1, 2, 3, 4, 5];
     for (const value of myArray) {
       if (value === 3) {
         break;
       }
       console.log(value);
     }
     ```

   - `forEach`: It does not support the `break` statement to exit the loop. If you want to exit the loop early,
   -  you would need to use a `return` statement (if used in a function) or throw an exception.

4. **Return Value:**
   - `for...of`: It does not have a return value. You can use it with `break` to exit the loop early, but it does not return anything.

   - `forEach`: It does not return anything. It's primarily used for its side effects (performing an action on each element) rather than producing a value.

In summary, while both `for...of` and `forEach` are used for iterating over elements in an array,
`for...of` is more versatile as it can be used with any iterable object and supports the `break` statement for early exit,
whereas `forEach` is specifically designed for arrays and lacks some features like early exit with `break`.
The choice between them depends on the specific requirements and the type of iterable you are working with.


-----------------------------------------------------------------------------------------------------------------------------------

Iterators and generators are features in JavaScript that relate to the iteration over a set of values. Let's discuss each one:

### Iterators:

An iterator is an object that provides a way to access the elements of a collection (or sequence) one at a time. In JavaScript, an iterator object must implement a `next()` method, which returns an object with two properties: `value` (the current value in the iteration) and `done` (a boolean indicating whether the iteration is complete).

Here's a simple example of an iterator:

```javascript
const myIterable = {
  [Symbol.iterator]: function () {
    let index = 0;
    const data = [1, 2, 3, 4, 5];

    return {
      next: function () {
        return index < data.length ?
          { value: data[index++], done: false } :
          { done: true };
      }
    };
  }
};

for (const value of myIterable) {
  console.log(value);
}
```

### Generators:

Generators are a special type of iterator in JavaScript. They are created using a function with an asterisk (`*`) and the `yield` keyword. The `yield` keyword is used to pause and resume the execution of a generator function, allowing you to produce a sequence of values on-the-fly.

Here's a simple example of a generator:

```javascript
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const generator = myGenerator();

for (const value of generator) {
  console.log(value);
}
```

In this example, the `myGenerator` function, when called, returns a generator object. The `yield` statements are used to produce values one at a time. The generator is then iterated over using a `for...of` loop.

Generators offer a more concise and expressive way to create iterators, and they also support bidirectional communication between the generator and the code that is iterating over its values.

It's important to note that generators are not the same as regular functions; they return a generator object that can be iterated over. The state of the generator is maintained between calls, allowing it to remember its internal state. This is different from regular functions that start fresh each time they are called.

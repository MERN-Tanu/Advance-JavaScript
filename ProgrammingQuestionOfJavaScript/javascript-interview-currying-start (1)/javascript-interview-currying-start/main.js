// Write a function which helps to achieve multiply(a)(b) and returns product of a and b
// Create a curry function
// What can your curried function do?

// Curry is a technique used in functional programming, where a function that
//  takes multiple arguments is transformed into series of function
//  that take a single argument.

// const multiply = (num1) => {
//   return (num2) => {
//     return num1 * num2;
//   };
// };
// const multiply1 = (num1) => (num2) => num1 * num2;

// console.log(multiply(2)(3));

// What is Arity here?

//  Original function with arity 3

/*
function add(x, y, z) {
  return x + y + z;
}

//  Curried version
function curryAdd(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

//  Usage
const curriedSum = curryAdd(1)(2)(3);
console.log(curriedSum);
//  Output : 6
*/

/* const curry = function (fn) {
  var arity = fn.length;
  console.log("arity", arity);

  return function f1(...args) {
    if (args.length >= arity) {
      return fn(...args);
    } else {
      return function f2(...moreArgs) {
        var newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
  };
};

const curriedSum = curry((a, b, c) => a + b + c);
const partialCurriedSum = curriedSum(1);
console.log(partialCurriedSum(1, 2, 3));

*/

/*
arity 3

curriedSum(1,2,3);

6

curriedSum(1)(2)(3);

6

curriedSum(1,(2,3));

ƒ f2(...moreArgs) {
        var newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      }

*/

const curry = function (fn) {
  var arity = fn.length;
  console.log("arity", arity);

  return function f1(...args) {
    if (args.length >= arity) {
      return fn(...args);
    } else {
      return function f2(...moreArgs) {
        var newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
  };
};

const get = curry((property, object) => object[property]);
const getId = get("id");
const map = curry((fn, values) => values.map(fn));

const getIds = map(getId);

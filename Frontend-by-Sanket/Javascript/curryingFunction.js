// Currying function in Js

/*
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = function (y) {
  let x = 2;
  console.log(2 * y);
};

let multiplyByten = multiply.bind(this, 10);
multiplyByten(5);
console.log(multiplyByten);

let multiplybySix = multiply.bind(this, 6);
multiplybySix(5);
console.log(multiplybySix);
*/
// ---------------------- Currying with Closures --------

let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

/*
It won't work,won't use bind with multiply

let multiplybySix = multiply.bind(this, 6);
multiplybySix(4);

console.log(multiplybySix);

let multiplyByten = multiply.bind(this, 10);
multiplyByten(3);
console.log(multiplyByten);
*/

let multiplybySix = multiply(6);
multiplybySix(7);

let multiplyByten = multiply(10);
multiplyByten(6);

# IIFE : Immediate Invoked function Expression
# Here printing the value of by using this "()"

```
(function x() {
  console.log("Hi");
})();

(function x(y) {
  console.log("hi", y);
})("tanu");

function f() {
  return 1;
}

function g() {
  return 2;
}
var i = 10;
// if (x % 2 == 0) {
//   var res = f();
// } else {
//   var res = g();
// }

var res = (function evaluate(i) {
  if (i % 2 == 0) {
    return f();
  } else {
    return g();
  }
})(i);
console.log(res);
```

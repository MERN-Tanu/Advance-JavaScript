# HOF: Higher order function ->
/***
 * there are functions which take anotehr function as arguments
 * these are called higher order functions
 *
 *  */

```
function f(x, fn) {
  /***
   * x->number
   * fn -> function
   */
  console.log(x);
  console.log(fn);
  fn();
}

f(10, function exec() {
  console.log("I am an expression passed to HOF");
});
```

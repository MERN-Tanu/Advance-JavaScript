# HOF: Higher order function ->

 * There are functions which take another function as arguments
 * These are called higher order functions


```
function f(x, fn) {
  /***
   * x->number
   * fn -> function
   */
  console.log(x);
  fn();
}

f(10, function exec() {
  console.log("I am an expression passed to HOF");
});
```

```
output:   10
         I am an expression passed to HOF

```

# HOF
 * fun -> HOF? ->   IT TAKES FUNCTION (WHICH IS A FUNCTION) as argument
 *
 *  x -> number
 *  fn -> function

```
function fun(x, fn) {
  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  fn();
}

// Callback function
fun(10, function exec() {
  console.log("I am executed also");
});
```

/***
 * How to create a promise?
 * How can we consume a promise?
 */

// ------- Promise -------

```
function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        // if the random number is even we fulfill
        console.log("fulfilling");
        resolve(num);
        console.log("compiled resolving");
        return num;
      } else {
        // if the number is odd,we reject
        console.log("rejecting");
        reject(num);
        console.log("compiled unresolved");
        return num;
      }
    }, 1000);
  });
}
```

let y = createPromiseWithTimeout();
console.log(y);

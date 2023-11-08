``` console.log("Hi we are starting");
for (let i = 0; i < 1000000000; i++) {
  // some task
}

console.log("done");

// console.log("hi");
// setTimeout(function () {
//   console.log("time done");
// }, 5000);
// console.log("by");

output:  hi
         by
         time done
```

```
function timeConsumingByLoop() {
  console.log("loop starts");
   for (let i = 0; i < 10000000; i++) {
    // some task
  }
 console.log("loop ends");
 }
```

``` function timeConsumingByRunTime() {
//   console.log("starting timer");
//   setTimeout(function exec() {
//     console.log("completed the timer");
//   }, 5000);
// }
// console.log("hi");
// timeConsumingByRunTime();
// timeConsumingByRunTime();

// console.log("by");
```

```
// console.log("hello world");

// // In the setTimeout it won't block the code for 0 second.It is only block in for loop onlhy
// setTimeout(function exec() {
//   console.log("timer done");
// }, 10);
```
```
// for (let i = 0; i < 100000; i++) {
//   // some task //10sec
// }
// console.log("end");
```
```
console.log("Hello world");
setTimeout(function exec() {
  console.log("timer done");
  setTimeout(function exec() {
    console.log("woah another one");
  }, 100);
}, 1);

for (var i = 0; i < 1000; i++) {
  // some task 10s
}
```
console.log("end");

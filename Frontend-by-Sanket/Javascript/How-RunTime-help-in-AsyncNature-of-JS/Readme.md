Async Programming With JS

1. JS is Sync (Synchrous in nature) in Nature. : if we execute valid ECMAscript code size given by the standards.
2. JS is Single threaded.

```
for (let i = 0; i < 1000000000; i++) {
   // some task
   }

console.log("done");

console.log("hi");
setTimeout(function () {
console.log("time done");
}, 5000);
console.log("by");


- output: hi
  by
  time done

```

1. browser provide some functionality
2. 1. Event loop : like a infinite loop.
3. It keeps on checking whether the call stack is empty or not and no global code is left.

   // --------------

```function timeConsumingByLoop() {
 console.log("loop starts");
 for (let i = 0; i < 10000000; i++) {
 // some task
 }
 console.log("loop ends");
 }

function timeConsumingByRunTime() {
console.log("starting timer");
setTimeout(function exec() {
console.log("completed the timer");
}, 5000);
}
console.log("hi");
timeConsumingByRunTime();
timeConsumingByRunTime();

console.log("by");
//

---

console.log("hello world");

// In the setTimeout it won't block the code for 0 second.It is only block in for loop onlhy
setTimeout(function exec() {
console.log("timer done");
}, 0);

console.log("end");
```

---

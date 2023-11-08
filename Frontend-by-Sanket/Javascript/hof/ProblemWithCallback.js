/***
 * 1. Inversion of control
 * 2. Callback hell -> readibility
 *
 */

/***
 * Inversion of control
 */

function doTask(fn, x) {
  // whole implementation is done by team A
  // calling my callback with the square of x
  fn(x * x);
  fn(x * x);
  //   Team A
}
// here team b tries to use it
doTask(function exec(num) {
  // this is inversion of control
  console.log("Woah num is", num);
}, 9);

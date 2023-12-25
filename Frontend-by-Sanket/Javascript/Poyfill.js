// Polyfill : use modern functionality on old browser.

// Refers to a piece of code that provides the functionality,
// that you might expect a browser to naturally provide.

/**
 *  Array : (what element is present at a particular index)
 * str.charAt()
 * str.at()
 *
 *
 */

// --------------------------------------
// Array.prototype.customAt = function () {
//   console.log("hello");
// };

// Array.customAt();

// ---------------------------------

// Array.prototype.customAt = function (index) {
//   if (index >= this.length || index < 0) return;
//   return this[index];
// };

// const a = [1, 2, 3, 4, , 56, 6];
// a.customAt(3);

// --------------------------------------------
//  Creating Custom Map

const a = [1, 2, 3, 4, 56, 6];
const mappedArray = a.customMap(function (element) {
  // Assuming you want to double each element
  return element * 2;
});

console.log(mappedArray);
// Output: [2, 4, 6, 8, 112, 12]

//  By using Recursion

function f(n) {
  //  base case
  if (n == 1) {
    return 1;
  }

  return n * f(n - 1);
}

console.log(f(9));

//  By using Loops

// function factorialWithLoops(m) {
//   let ans = 1;
//   for (let i = 1; i <= m; i++) {
//     ans = ans * i;
//   }

//   return ans;
// }
// console.log(factorialWithLoops(6));

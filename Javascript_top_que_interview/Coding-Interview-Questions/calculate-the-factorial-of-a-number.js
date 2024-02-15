// factorial(5) = 5*4*3*2*1 = 120

function isFactorial(number) {
  if (number == 0) return 1;

  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

console.log(isFactorial(6)); // 720
console.log(isFactorial(9)); // 362880

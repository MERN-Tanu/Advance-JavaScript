function isPrime(number) {
  for (let i = 2; i <= number / 2; i++) {
    if (number % 2 == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(4)); // false
console.log(isPrime(7)); // true

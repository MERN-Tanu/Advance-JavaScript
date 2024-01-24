type pairOfNumbers = [number, number];

function linearSearch(array: number[], x: number): pairOfNumbers {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == x) return [-1, -1];
  }
  return [-1, -1];
}

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 27, 35];
console.log(linearSearch(array, -2));

// [-1, -1]

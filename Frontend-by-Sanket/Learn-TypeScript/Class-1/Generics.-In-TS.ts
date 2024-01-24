// This is called Generics in TypeScript : here passing "any" -> not number or string.
// it is called to avoid code duplication

type pairOfNumber = [any, any];

type pairOfNumberAndString = [number, string];

// Generics syntax

function linearSearch<T, R>(array: T[], x: T, y: R): [number, T] {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == x) return [i, array[i]];
  }
  return [-1, x];
}

// function linearSearchForString(
//   array: string[],
//   x: string
// ): pairOfNumberAndString {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == x) return [i, array[i]];
//   }
//   return [-1, ""];
// }

const array: number[] = [1, 2, 3, 9, 4, 5, 6, 7, 78];
console.log(linearSearch<number, string>(array, 6, "abc"));

const stringArray: string[] = ["abc", "def", "ghi", "jkl"];

console.log(linearSearch<string, number>(stringArray, "def", -2));

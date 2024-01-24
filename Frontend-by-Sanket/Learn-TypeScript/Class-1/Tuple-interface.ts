// Let's say we want to define a pair or a triplet or a custom tuple (set of x value)

type pair = [number, number];

type triplet = [number, number, number];

interface pairInterface {
  first: number;
  second: number;
}

// Can type and Interface represent function?

type logger = (msg: string, error: number) => void;

interface loggerInterface {
  log: (msg: string, errorCode: number) => void;
}

// Defining union is possibe with type but not interfaces

type unionOfstringNumber = number | string;

// Interfaces solves the complex problem
// You can define two interfaces with the same name

// interface ComplexNumber {
//   real: number;
//   imaginary: number;
// }

// interface ComplexNumber {
//   add: (num: ComplexNumber) => ComplexNumber;
// }

// More easily you can define like this

interface ComplexNumber {
  real: number;
  imaginary: number;
  add: (number: ComplexNumber) => ComplexNumber;
}

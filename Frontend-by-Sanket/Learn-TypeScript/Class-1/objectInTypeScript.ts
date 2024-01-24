/*
 How to define types for objects
 - classes : data member, member functions
 - interface -> its a contract (Interface solve very complex problems)
*/

class Car {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  display() {
    console.log(this.name);
  }
}

interface Product {
  name: string;
  price: number;
  brand: string;
  display(): void;
}

let p1: Product = {
  name: "Iphone",
  price: 100000,
  brand: "Apple",
  display: () => {
    console.log("Display");
  },
};
console.log(p1);

function sum(a: number, b?: number): number {
  return a + b || 0; // short circuiting
}

console.log(sum(10, 20));
console.log(sum(10)); // b?
//  Interface never allow to create constructor

// let p1 = new Product (); // error
let c1 = new Car("i10");

// let p1: Product = {
//   name: "Iphone",
//   price: 100000,
//   brand: "apple",
// };

// let b1: brand = {
//   name: "Apple",
// };

// let c1: Car = {
//   name: "i10",
//   price: 500000,
//   brand: "Hyundai",
// };

// p1 = c1;

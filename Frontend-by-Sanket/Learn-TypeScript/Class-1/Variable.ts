// you want to update the value of variable

// which value is competible or not

// let firstName: string = "tanu";
// firstName = 10; // error becoz of the same name

let schoolName: "DPS" | "Dav" = "DPS";

let another: string = "KR";

another = schoolName;

console.log(another); // DPS

type Complex = {
  real: number;
  imag: number;
};

interface IComplex {
  real: number;
  imag: number;
  add: (c: Complex) => Complex;
}

let c1: Complex = {
  real: 10,
  imag: 10,
};

let c2: IComplex = {
  real: 9,
  imag: 9,
  add: (c) => {
    return c;
  },
};

console.log(c1);

c1 = c2; // TS will consider complex and IComplex same beacuse the members are same
// names are different, still it doesn't matter

console.log(c1);

/*
[LOG]: {
  "real": 10,
  "imag": 10
} 
[LOG]: {
  "real": 9,
  "imag": 9
} 

[LOG]: {
  "real": 9,
  "imag": 9
} 
*/

// In default case :

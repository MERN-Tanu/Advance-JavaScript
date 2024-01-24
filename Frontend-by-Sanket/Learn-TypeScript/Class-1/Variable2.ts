let schoolName: "DPS" | "Dav" = "DPS";

let another: string = "KR";

another = schoolName;

console.log(another); // DPS

type Complex = {
  real: number;
  imag: number;
  def: number;
};

interface IComplex {
  real: number;
  imag: number;
  //   add: (c: Complex) => Complex;
  def: 0 | 1 | -1;
  ran: number;
}

let c1: Complex = {
  real: 10,
  imag: 10,
  def: 100,
};

let c2: IComplex = {
  real: 9,
  imag: 9,
  ran: 10,
  def: 1,
  //   add: (c) => {
  //     return c;
  //   },
};

console.log(c1);

c1 = c2; // TS will consider complex and IComplex same beacuse the members are same
// names are different, still it doesn't matter

console.log(c1);

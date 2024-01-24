// type vs Interface

// for Primitive
type text = string;

// for defining custom types for arrays,
// type keyword is more easy

// more easy and verbose
type stringArray = string[];

/*
Using an interface we will define an object which will be always having keys
of type number and value to be of the type of the array

*/
// [10,20,30,33]

interface numberArray {
  [index: number]: number;
}

/*
{
    0: 10,
    1: 20,
    2: 30,
    3: 33
}

*/

// this is also valid object
// Keys can be string as well in JavaScript

// x = {
//   "tanu": 10,
//   "isha": 10,
// };

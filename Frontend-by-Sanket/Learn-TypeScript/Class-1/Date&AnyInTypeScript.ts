// Date Object In TS

const dob = new Date(1998, 3, 11);
console.log(dob);
console.log(dob.getDate());
console.log(dob.getMonth());

// Any Type Object
// any type : your free ticket to get rid of TS type checking
// If you want to define a variable with Type any, then either mention ":any" while declaring the variable
// or do not assign a value while decalring a variable

let x; // this variable x is of type any
x = "10";
let x = 10;

// let y: any = 10;

// let z: any;
// console.log(z);

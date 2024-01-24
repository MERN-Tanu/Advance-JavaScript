/*In Js
const result = {
  name: "Sanket",
  marks: 98,
};

console.log(result);

 updating an old key value pair
result.marks = 99;  do you think TS will allow this?

 adding a new key value pair
result.address = "XYZ";  do you think TS will allow this?
*/

/*
in TS

The type of the above raw object is inferred as {name: string,marks:number}
something like the given object below


const result: { name: string; marks: number; address?: string } = {
  name: "Sanket",
  marks: 98,
};

console.log(result);

updating an old key value pair
result.marks = 99; // do you think TS will allow this?

adding a new key value pair
result.address = "XYZ"; // do you think TS will allow this?

Now the above statement will throw a compiler error beacuse in the type {name:string,}
we never mentioned anything about any address

Thats's why TS we are violating the default type

to solve this, we can add an additional 
optional address property while defining the object

const result : {name: string,marks:number,address?:string} ={
    name: "tanu",
    marks: 98
}

*/

type Details = { name: string; marks: number; address?: string };
// Details is kind of like an alias or a nickname to { name: string; marks: number; address?: string }

// const result1: { name: string; marks: number; address?: string } = {
//   name: "tanu",
//   marks: 98,
// };

// const result2: { name: string; marks: number; address?: string } = {
//   name: "Ishant",
//   marks: 95,
// };

const result1: Details = {
  name: "tanu",
  marks: 98,
};

const result2: Details = {
  name: "Ishant",
  marks: 95,
};

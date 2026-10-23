Shallow and Deep copy

1. Shallow copy
A shallow copy creates a new outer object, but nested objects are still shared by reference.

 ```
const original = {
  name: "Tanu",
  address: {
    city: "Bengaluru"
  }
};

const copy = { ...original };

copy.name = "Priya";
copy.address.city = "Delhi";

console.log(original.name);         // "Tanu"
console.log(original.address.city); // "Delhi"
 ```

const a = { ...original };
const b = Object.assign({}, original);
const c = [...originalArray];

2. Deep copy
A deep copy creates an independent copy of the outer object and its nested objects.

 ```
 const original = {
  name: "Tanu",
  address: {
    city: "Bengaluru"
  }
};

const copy = structuredClone(original);

copy.address.city = "Delhi";

console.log(original.address.city); // "Bengaluru"
console.log(copy.address.city);    // "Delhi"
 ```


// let obj = {
//   name: "peter",
// };

// let user = obj;
// user.name = "bruce";

// console.log(obj);

/* { name: 'bruce' } := memory location copy : in Object case, 
 Object through reference

*/

// Shallow Copy :

/* Problem 
let obj = {
  name: "peter",
};

let user = obj;
user.name = "bruce";

console.log(obj);

{ name: 'bruce' }

*/

// Solution :

// let obj = {
//   name: "peter",
// };
// let user = Object.assign({}, obj); //or
// let user = { ...obj }; // will give you same result

// user.name = "bruce";

// console.warn("object is :", obj);
// console.log("user is :", user);

/*
object is : { name: 'peter' }
user is : { name: 'bruce' }

*/

let obj = {
  name: "peter",
  address: {
    city: "Noida",
    state: "UP",
  },
  getData: function () {
    return "all data is here";
  },
};

// let user = JSON.parse(JSON.stringify(obj));
let user = __.cloneDeep(obj);
user.address.city = "Gurgaon";

console.log("obj is :", obj);
console.log("user is:", user);

/*
obj is : {
  name: 'peter',
  address: { city: 'Noida', state: 'UP' },
  getData: [Function: getData]
}
user is: { name: 'peter', address: { city: 'Gurgaon', state: 'UP' } }

*/

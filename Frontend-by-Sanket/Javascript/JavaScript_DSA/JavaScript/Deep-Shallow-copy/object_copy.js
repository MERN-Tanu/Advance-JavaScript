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

/*
Object is an collection of related data and/or functionality
Object store data in form of key and value
In same object we can store different type of value

*/

let key = "address";
const user = {
  name: "Peter",
  age: 25,
  isDeveloper: true,
  getData: function () {
    return this.city;
  },

  inner: {
    name: "inner man",
  },
  ["pin code"]: "234556",
  [key]: "node",
  up,
  india,
};

user.name = "anil";
delete user.inner;
user.city = "new york";

console.log(user.getData()); // data is here
// console.log(user.inner); // { name: 'inner man' }

// console.log(user.inner.name); // inner man

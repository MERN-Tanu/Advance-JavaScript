// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];

//  First Approach : brute force

// const isNameExists = (name, users) => {
//   let exists = false;
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === name) {
//       exists = true;
//     }
//   }

//   return exists;
// };

/*

The some() method in JavaScript is used to test whether at least one element 
in an array passes the test implemented by the provided function.
 It returns true if any element satisfies the condition, and false otherwise.

Here's the basic syntax of the some() method:

array.some(callback(element, index, array), thisArg);


*/

// const isNameExists = (name, users) => users.some((user) => user.name === name);

//  Approach 3:

// const isNameExists = (name, users) => {
//   const user = users.find((user) => user.name === name);
//   return Boolean(user);
// };

//  Appraoch 4:

const isNameExists = (name, users) => {
  const index = users.findIndex((user) => user.name === name);
  return index >= 0;
};

/*
isNameExists('Jack',users);
true
isNameExists("foo",users);
false

*/

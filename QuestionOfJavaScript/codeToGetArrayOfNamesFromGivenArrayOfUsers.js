const users = [
  {
    id: 1,
    name: "jack",
    isActive: "true",
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

//  Normal for loop

/* const names = [];
for (let i = 0; i < users.length; i++) {
  //   names.push(users[i].name);
  if (users[i].isActive) {
    names.push(users[i].name);
  }
  //   names.push(users[i].isActive);
}

console.log("names", names);
*/

/*
1. Output: 

names [
    'jack', 'true', 1,
    'John', true,   2,
    'Mike', false,  3
  ]

  2. output :

  names [ 'jack', 'John' ]

*/

/* More concise way:

const names = [];
users.forEach((user) => {
  names.push(user.names);
  names.push(user.id);
  names.push(user.isActive);
});

console.log(names);


Output : 

[
  undefined, 1,
  'true',    undefined,
  2,         true,
  undefined, 3,
  false
]

*/

//  How to perform desending order sort :
users.sort((user1, user2) => (user1.age < user2.age ? 1 : -1));
const names = users.filter((user) => user.isActive).map((user) => user.name);

console.log("names", names);

// output : names [ 'jack', 'John' ]

let welcome1 = function (name) {
  return `hello & welcome ${name}`;
};
console.log(welcome1("tanu"));

// Arrow Function

let welcome2 = (name, age) => {
  return `hello & welcome ${name}- ${age}`;
};

console.log(welcome2("tanvi", 22));

// ------------
let welcome3 = (name) => `welcome ${name}`;

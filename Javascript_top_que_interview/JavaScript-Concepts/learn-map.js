let data = new Map([
  ["name", "Peter"],
  [true, "this is a bool key in map"],
]);

data.set("name", "Joe");
data.delete("name");
data.has(true);

console.log(data);

// You can create custom Prototype

Object.prototype.myAppData = "this is a sample project";
Object.prototype.myData = function () {
  return "custom function";
};

String.prototype.otherData = "this is prop for string";
String.prototype.customLength = function () {
  return this.length + 2;
};

let user = {
  getFullname: function () {
    return this.name + " " + this.lastName;
  },
  getAge: function () {
    let age = new Date().getFullYear() - this.birth;
    return age;
  },
};

let student = {
  name: "Tanu",
  lastName: "Singh",
  birth: 1985,
  getAge: user.getAge,
};

let teacher = {
  name: "sr",
  lastName: "jt",
  birth: 1980,
  getAge: user.getAge,
};

// teacher.__proto__ = user;
student.__proto__ = user;
// student.getAge is not a function : we will get this error , this error will overcome by Prototype

console.log(student.getAge());
console.log(teacher.getAge());

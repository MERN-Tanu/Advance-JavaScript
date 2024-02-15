let student = {
  name: "Tanu",
  lastName: "Singh",
  birth: 1985,
  getFullName: function () {
    console.log(this);
    return this.name + " " + this.lastName;
  },
  getAge: function () {
    let age = new Date().getFullYear() - this.birth;
    return age; // 39
  },
};

let teacher = {
  name: "sr",
  lastName: "jt",
  birth: 1980,
  getFullName: function () {
    console.log(this);
    console.log(teacher);
    return this.name + " " + this.lastName;
  },
  getAge: function () {
    let age = new Date().getFullYear() - this.birth;
    return age; // 44
  },
};

console.log(student.getAge());
console.log(teacher.getAge());

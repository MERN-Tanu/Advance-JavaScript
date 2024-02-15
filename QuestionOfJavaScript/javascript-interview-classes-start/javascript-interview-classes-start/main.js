// Design a class for employee which takes id and name in during construction of object and has a salary property

// class Employee {
//   constructor(id, name) {
//     if (!id || !name) {
//       throw new Error("Employee id and name are mandatory");
//     }

//     this.id = id;
//     this.name = name;
//   }

//   setSalary(salary) {
//     this.salary = salary;
//   }

//   getId() {
//     return this.id;
//   }

//   getName() {
//     return this.name;
//   }

//   getSalary() {
//     return this.salary;
//   }
// }

// const employee = new Employee(1, "Jack");
// employee.setSalary(1000);

// console.log(employee);
// console.log(employee.getId());
// console.log(employee.getName());
// console.log(employee.getSalary());

/*

Employee { id: 1, name: 'Jack', salary: 1000 }
1
Jack
1000

*/

// Design a class for manager which is employee and can have department property

class Employee {
  constructor(id, name) {
    if (!id || !name) {
      throw new Error("Employee id and name are mandatory");
    }

    this.id = id;
    this.name = name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getSalary() {
    return this.salary;
  }
}

class Manager extends Employee {
  setDepartment(name) {
    this.Department = name;
  }

  getDepartment() {
    return this.Department;
  }
}

const employee = new Employee(1, "Jack");
employee.setSalary(1000);
const manager = new Manager(2, "John");
console.log(manager);

// Output : Manager { id: 2, name: 'John' }

//  Design the same class by using only javascript Prototypes

var Employee = function (id, name) {
  if (!id || !name) {
    throw new Error("Employee id and name are mandatory");
  }
  this.id = id;
  this.name = name;
};

Employee.prototype.setSalary = function (salary) {
  this.salary = salary;
};

Employee.prototype.getId = function () {
  return this.id;
};

Employee.prototype.getName = function () {
  return this.name;
};

Employee.prototype.getSalary = function () {
  return this.salary;
};

//  What will be console.logged here

// Question : 1
// console.log(foo);
// foo = 1;
// Output : ReferenceError: foo is not defined

//  Question : 2

// console.log(foo);
// var foo = 2;

//  output : ReferenceError: foo is not defined

//  Question : 3

foo = 3;
console.log(foo);
var foo;

//  Output : 3

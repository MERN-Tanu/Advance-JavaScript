// var teacher = "abc";
// function fun() {
//   var teacher = "pqr";
//   let content = "35";
//   if (content == "JS") {
//     let hours = "120+";
//     console.log(hours);
//   }
//   console.log(teacher, content);
// }

// fun();
// console.log(teacher);
// console.log(content);

// var teacher = "abc"; //global
// function fun() {
//   //global
//   console.log(teacher); // no error will be given
//   console.log(content); // throws an error
//   var teacher = "pqr"; // scope of fun
//   let content = "JS"; // content will be access only post declartion
//   if (content == "JS") {
//     let hours = "120+";
//     console.log(hours);
//   }
//   console.log(teacher, content);
// }

// fun();
// console.log(teacher);
// console.log(content);

function fun() {
  //global
  let i;
  if (x % 2 == 0) {
    i = 0;
  } else {
    i = 1;
  }
}

function gun(x) {
  // global
  if (x % 2 == 0) {
    var i = 0;
  } else {
    var i = 1;
  }
}

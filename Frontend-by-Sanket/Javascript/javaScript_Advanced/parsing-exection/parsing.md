var teacher = "abc";
function fun() {
  var teacher = "xyz";
  console.log(teacher);
}

function gun() {
  var student = "pqr";
  console.log(student);
}

fun();
gun();
console.log(teacher);

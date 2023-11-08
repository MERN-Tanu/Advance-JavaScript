if (true) {
  var x = 10;
}
console.log(x);

function fun() {
  var y = 11; // not accessible
}

function gun() {
  console.log(z);
  let z = 10;
}
// console.log(x);
// gun();

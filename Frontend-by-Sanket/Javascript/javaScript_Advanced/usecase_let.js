function fun() {
  for (var i = 0; i < 10; i++) {
    // do something
  }
  console.log(i);
}

function process(x, y) {
  if (x > y) {
    var temp = x;
    x = y;
    y = temp;
  }
  return y - x;
}

fun();

let i = 1;
console.log(y);
while (i < 5) {
  var y = 10;
  i++;
}
console.log(y);

//  let won't allow re-Declarartion
// var allow re-Declaration
let x = 9;
let x = 10;

// var allow re-Declaration
var y = 10;
var y = 11;

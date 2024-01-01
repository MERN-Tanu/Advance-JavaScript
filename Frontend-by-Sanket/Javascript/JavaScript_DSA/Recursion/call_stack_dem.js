function fun() {
  let x = 10;
  console.log("Inside function");
}

function gun(y) {
  console.log("inside gun");
  fun();
  console.log("completed fun");
}

function run() {
  var z = 9;
  gun();
  console.log("exit");
}

run();

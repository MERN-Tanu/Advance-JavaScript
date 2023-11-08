function fun(fn) {
  console.log("welcome to fun");
}

fun(function askingAboutFun() {
  console.log("wow so much fun");
  console.trace();
});

//  for recursive cases named function expression are also helpful

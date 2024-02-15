function* simpleGenerator() {
  // we can put * either on function or function name both are fine
  console.log("function called");
  yield 20; // { value: 20, done: false }
  // Done means will this function executes completely
  // only it will print at first call, at second call second only call not first one
  yield 30;
  yield 40;
  yield 50;
}

let simpleGen = simpleGenerator();
console.log(simpleGen.next());
console.log(simpleGen.next());
console.log(simpleGen.next());
console.log(simpleGen.next());

/*
            function called
            { value: 20, done: false }
            { value: 30, done: false }
            { value: 40, done: false }
            { value: 50, done: false }
*/

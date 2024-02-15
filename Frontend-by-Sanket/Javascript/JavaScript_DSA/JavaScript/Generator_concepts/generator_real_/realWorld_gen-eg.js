function* simpleGenerator() {
  let i = 100;
  while (true) {
    i++;
    yield i;
  }
}

let simpleGen = simpleGenerator();

function getNewId() {
  //   console.log(simpleGen.next());
  document.getElementById("newId").innerText = simpleGen.next().value;
}

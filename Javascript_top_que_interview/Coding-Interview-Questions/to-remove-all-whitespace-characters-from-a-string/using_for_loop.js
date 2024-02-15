function removeWhiteSpace(str) {
  let result = "";
  for (let char of str) {
    if (char !== " ") {
      result = result + char;
    }
  }
  return result;
}

console.log(removeWhiteSpace("hello, tanu  how are  you"));
//hello,tanuhowareyou

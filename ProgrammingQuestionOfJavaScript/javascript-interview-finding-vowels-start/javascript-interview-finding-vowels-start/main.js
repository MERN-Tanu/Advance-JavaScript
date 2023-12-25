// Write a function which counts vowels in a string

//  Approach - 2
const findVowels = function (str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      return vowels.includes(char) ? acc + 1 : acc;
    }, 0);

  // Approach - 1
  //   let count = 0;
  //   for (let char of str.toLowerCase()) {
  //     if (vowels.includes(char)) {
  //       count++;
  //     }
  //   }

  return count;
};

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    console.log("char", char);

    /*  1st str = "hello world"
                    char h
                    char e
                    char l
                    char l
                    char o
                    char  
                    char w
                    char o
                    char r
                    char l
                    char d
     2nd Str = "tanu", how are you
                    char t
                    char a
                    char n
                    char u
                    char ,
                    char  
                    char h
                    char o
                    char w
                    char  
                    char a
                    char r
                    char e
                    char  
                    char y
                    char o
                    char u

    */
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello World")); // 3
console.log(countVowels("Tanu, How are you")); // 7

/*
Dry Run:

For the input "Hello World":

The loop iterates through each character in the lowercase
 version of the string.

char takes on values: h, e, l, l, o, <space>, w, o, r, l, d.

The includes method checks if each char is present in the 
vowels array.
It increments the count for vowels e, o, and o.

The final count is 3.

For the input "Tanu, How are you":

The loop iterates through each character in the lowercase 
version of the string.

char takes on values: t, a, n, u, ,, <space>, h, o, w, 
<space>, a, r, e, <space>, y, o, u.

The includes method checks if each char is present in the 
vowels array.

It increments the count for vowels a, o, o, a, e, o, u.
The final count is 7.

includes Method Purpose:

The includes method is used to check if a particular 
value is present in an array. In this context, 
it checks if the current character (char) is 
a vowel by verifying if it is present in the 
vowels array. If the character is a vowel, 
the count is incremented
*/

function isAnagram(str1, str2) {
  console.log(str1, str2); // listen silent

  const sortedstr1 = str1.split("").sort().join("");

  console.log(sortedstr1); // eilnst

  const sortedstr2 = str2.split("").sort().join("");

  console.log(sortedstr2); // eilnst

  if (sortedstr1 === sortedstr2) {
    return true; // true
  } else {
    return false;
  }
}

console.log(isAnagram("listen", "silent"));

/*
Dry run:

For "listen", after splitting, sorting, and joining, 
you get "eilnst".

For "silent", after the same operations, you also get "eilnst".

Since the sorted strings are equal, the function returns true,
indicating that "listen" and "silent" are anagrams.

This approach is straightforward and works well,
especially for shorter strings. 

However,for longer strings or cases where performance is crucial, 
alternative methods like character frequency 
counting might be more efficient.

*/

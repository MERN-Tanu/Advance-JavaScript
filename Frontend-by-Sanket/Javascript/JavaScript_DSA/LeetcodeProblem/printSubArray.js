function printSubarrays(arr) {
  for (let start = 0; start < arr.length; start++) {
    let str = "";
    for (let end = start; end < arr.length; end++) {
      str += arr[end];
      console.log(str);
    }
  }
}

printSubarrays([1, 2, 3, 4]);

/*


1
12
123
1234
2
23
234
3
34
4







*/

function findLargest(arr) {
  let largestElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  }
  return largestElement;
}

console.log(findLargest([2, 3, 4, 57, 8, 3])); // 57

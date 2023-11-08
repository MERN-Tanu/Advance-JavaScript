
 * Reduce is HOF available for array
 * Reduce also takes a function f as an argument,
 * What reduce does is, It is one by one goes to every element of the array
 * Say the current element is arr[i]
 * Reduce will pass this element to the function f, and accumulate the result of further function calls
 * With this particular result


```
const arr = [1, 2, 3, 4, 5, 6];
function sum(preResult, currResult) {
  return preResult + currResult;
}
const result = arr.reduce(sum);
console.log(result);

```


```
 * first element  -> 2
 * second element -> 3
 * third  element -> 4
 * fourth element -> 5
 * fifth element  -> 6


Cart -> [iphone {price: 100000,name:"iphone"},case{price:500,name:"backcove"},
           tempered glass {price:300, name: tempered glass}]
```
```
function addPrice(preResult, currResult) {
  console.log(preResult, currResult);
  let newPrice = preResult.price + currResult.price;
  return { price: newPrice };
}

let cart = [
  { price: 100000, name: "iphone" },
  { price: 500, name: "backcove" },
  { price: 300, name: "temperedglass" },
];

const totalPrice = cart.reduce(addPrice);
console.log(totalPrice);
```

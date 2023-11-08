# Higher order function: there are functions which take another function as arguments
# these are called higher order function

```
function f(x, fn) {
// x = number
// fn = function
console.log(x);
fn();
}

f(10, function exec() {
console.log("I am an Expression passed to a HOF");
});
```

# Unsorted array
```
let arr = [1, 10, 9, 100, 11, 12, 13, 14, 2, 3];
// it's sorts the given array
// [Expection]: This might arrange elements in inc order
// Default implementation of arr.sort() is going to sort my array in lexicographical order

- 0 -> A
- 1 -> B
- 2 -> C
- 3 -> D
- 4 -> E
- 5 -> F
- 6 -> G
- 7 -> H
- 8 -> I
- 9 -> J
- 10 -> K
- ...
  // [B,BA,J,BAA,BB,BC,BD,BE,C,D] iF WE ARRANGE IT ACCORDING TO DICTIONARY

  arr.sort();
  console.log(arr);

let b = [1, 10, 9, 100, 11, 12, 13, 14, 2, 3];

# sort b in increasing order

b.sort(function (a, b) {
// if a<b -> a-b will be negative -> if comparator function gives negative then a is placed before b (a<b)
// if a>b -> a-b will be positive -> if comparator function gives positive the b is placed before a (a>b)
return a - b;
// sort is a HOF ,,the sort function takes a comparator function as argument
});
console.log(b);

---

// arrays are also custom objects in JS
// index of the element is the key and the element it self is the value
// ["abc","def","ghi"] -> {0:"abc",1:"def",2:"ghi"}
```
# Map function

1. map is a higher order function avaliable with arrays
   2.It takews a function as an argument -> f
2. it returns an array in which every value is actually populated by calling
3. function f with original array element as an argument.
4. Every element of the original array is passed one in the argument function f
5. Whatever is thge output for each individual element, we populate that output in an array.
6. Map interanally iterates/loop over every element of the original array
7. pass that element in the argument function f and then, store the returned value inside an array.

```
function square(el) {
// returns sqaure
return el _ el;
}
function cube(x) {
return x _ x \* x;
}
function isEvenOdd(x) {
if (x % 2 == 0) {
return "Even";
} else {
return "Odd";
}
}
// original array
const arr = [1, 2, 3, 4, 5];

// square is function passed as an argument
const result = arr.map(square);
const result1 = arr.map(cube);
const result2 = arr.map(isEvenOdd);

square(1) -> 1
square(2) -> 4
square(3) -> 9
square(4) -> 16
square(5) -> 25

console.log(result);
console.log(result1);
console.log(result2);

```

# When to use Maps?
- In any situations when we have to do an operation on every element of the array
- and store the result of each operation
- map can be a good option

- For Example:
- Array of product objects.
```
  const newArray = [9, 8, 7, 6, 5];

- if the function that we are passing in map takes two arguments
- then first argument will be accessing the actual value
- second argument will be accessing index of that value

function print(element, index) {
return "Element at index ${index} is ${element}";
}

const resultnew = newArray.map(print);
console.log(resultnew);

function customMapper(arr, func) {
for (let i = 0; i < arr.length; i++) {
resultnew.push(func(arr[i]), i);
}
return resultnew;
}

const value = customMapper(newArray, print);
console.log(value);
```

# Filter Function
- Filter is also a higher order function
- Filter also loops over the array element
- There is one special thing about filter ,i.e the argument function f which we have to pass inside
- Filter should always return a boolean,otherwise output will be coverted to a boolean
-
- Filter loops over every element,passes that element in the argument function and then if the output
- of this function call is true,then it stores the orginal element in a new array otherwise
- doesn't add this element to the array

```
  function oddOrEven(x) {
  return x % 2 == 0;
  // returning a boolean
  }
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  arr.filter(oddOrEven);
  const result = arr.filter(oddOrEven);
  console.log(result);

---
```

# Reduce is HOF available for array
- Reduce also takes a function f as an argument,
- What reduce does is, It is one by one goes to every element of the array
- Say the current element is arr[i]
- Reduce will pass this element to the function f, and accumulate the result of further function calls
- With this particular result
- 
```
const arr = [1, 2, 3, 4, 5, 6];
function sum(preResult, currResult) {
return preResult + currResult;
}
const result = arr.reduce(sum);
console.log(result);

- first element ->2
- second element -> 3
- third element -> 4
- fourth element -> 5
- fifth element -> 6

  Cart -> [iphone {price: 100000,name:"iphone"},case{price:500,name:"backcove"},
  tempered glass {price:300, name: tempered glass}]

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
---

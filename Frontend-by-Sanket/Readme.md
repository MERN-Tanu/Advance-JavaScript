


![image](https://github.com/user-attachments/assets/defab3a5-fdf2-4e80-8340-97a565d6f424)
![image](https://github.com/user-attachments/assets/a0649f58-a75a-4213-b1d5-ed0753028171)



```js
import { useState } from "react";

function LogicUseStateArray() {
  const [items, setItem] = useState([]);
  console.log(items);
  console.log(items.length);
  return (
    <>
      <hr />
      <h2>Learn useState with Non-primitive types- Array:</h2>
      <h2> {items}</h2>
      <br />
      <button onClick={() => setItem([...items, items.length + 1])}>
        Click me
      </button>
    </>
  );
}

export default LogicUseStateArray;


```

```js
import React, { useState } from "react";

function LogicUseStateObject() {
  const [state, setState] = useState({
    count: 0,
    clicks: 3,
    price: 300,
    name: "tanu",
  });

  console.log({ ...state });
  return (
    <div>
      <h2>learn useState non-primitive type: object </h2>{" "}
      <div>{state.count}</div>
      <div>{state.clicks}</div>
      <div>{state.price}</div>
      <div>{state.name}</div>
      <button
        onClick={() => {
          setState({
            ...state,
            count: state.count + 1,
            clicks: state.clicks + 2,
            price: state.price + 2,
            name: state.name,
          });
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default LogicUseStateObject;


```

![image](https://github.com/user-attachments/assets/1eaf5118-62a8-4f95-bb1c-ce0d021cefd7)






























# What is Document Object Model?

# Scoping in JavaScript:

a). Parsing : Scope Resolution
b). Execution : To run the Code

1. Global scope
2. function scope
3. Block scope

# Difference b/w var and let

# BlockScope: let and const are block scope keyword

```js
if(true){
var x = 10;
}
console.log(x);

Output: 10

if(false){
var x =10;
}
console.log(x);

output: undefined
```
# Function Scope: var keyword is function and global scope

 let won't allow re-Declarartion
 var allow re-Declaration

# IIFE = Immediate invoked fuunction expression

# Immediate = the moment we define it, then only we call it.

# Higher order function :

# Map is a higher order function available with arrays

These are function depends and opearte on other function
higher order function takes another function as an argument or return a function as argument and then execute the logic.

# Example:
```js
function gun(){

<!-- some logic -->

}

<!-- This is higher order function -->

function fun(gun){

<!-- some logic -->

gun();
}
```
# Map Function

1. Map is a higher order function avaliable with arrays.
   2.It takes a function as an argument -> f.
2. It returns an array in which every value is actually populated by calling
3. function f with original array as argument


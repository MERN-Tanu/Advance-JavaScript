


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


```js
import { useState } from "react";

function LogicPartUseState() {
  const [items, setItems] = useState({ firstName: "tanu", lastName: "singh" });

  const handleUpdate = () => {
    setItems({ ...items, firstName: "abc", lastName: "xyz" });
  };

  return (
    <div>
      <h2>How to update the object properties</h2>
      <h4>
        My full name is {items.firstName} {items.lastName}{" "}
      </h4>
      <button onClick={handleUpdate}>Click me</button>
    </div>
  );
}

export default LogicPartUseState;

```

# How to add the items in the array
```js
import { useState } from "react";

function LogicPartUseState() {
  const [addTask, setAddTask] = useState(["joe", "kim", "abc"]);
  const handleUpdate = () => {
    setAddTask([...addTask, "sur"]);
  };

  return (
    <div>
      <h3>Add task here:</h3>
      <div>
        {addTask.map((val) => (
          <li>{val}</li>
        ))}
      </div>
      <button onClick={handleUpdate}>click me</button>
    </div>
  );
}

export default LogicPartUseState;


```


```js

import { useState } from "react";

function LogicPartUseState() {
  // lazy initialisation

  function expensive() {
    console.log("hey I am lazy initialisation");
    return 10;
  }
  const [count, setCount] = useState(() => expensive());

  return (
    <div>
      <h2>I am lazy initialisation</h2>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default LogicPartUseState;

```

# How to add the items in nested objects

```js
import { useState } from "react";

function LogicPartUseState() {
  const [items, setItems] = useState({
    firstName: "tanu",
    lastName: "singh",
    address: { city: "kanpur", country: "India" },
  });

  const handleUpdate = () => {
    setItems({
      ...items,
      firstName: "abc",
      address: { ...items.address, city: "lucknow" },
    });
  };

  return (
    <div>
      <h2>How to update the object properties</h2>
      <h4>
        My full name is {items.firstName} {items.lastName}{" "}
      </h4>
      <h4>
        City and country name: {items.address.city} and {items.address.country}
      </h4>
      <button onClick={handleUpdate}>Click me</button>
    </div>
  );
}

export default LogicPartUseState;

```


![image](https://github.com/user-attachments/assets/7b5ecb74-ec9d-46bd-8218-496647e08f89)

```js
import { useEffect, useState } from "react";

function LearnUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("I am useEffect Hook");
  }, []);

  return (
    <div>
      <h2>Learn useEffect Hook in react</h2>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default LearnUseEffect;

```

```js

import { useEffect, useState } from "react";

function LearnUseEffect() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  useEffect(() => {
    console.log("I am useEffect Hook");
  }, []);

  return (
    <div>
      <h2>Learn useEffect Hook in react</h2>
      <h2>{count}</h2>
      <h2>{number}</h2>

      <span>
        {" "}
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <br />
        <button onClick={() => setNumber(number - 1)}>Decrement</button>
      </span>
    </div>
  );
}

export default LearnUseEffect;

```

# How to add timer and use of setTimeout and clearInterval

```js
import { useEffect, useState } from "react";

function LearnUseEffect() {
  const [count, setCount] = useState(0);

  // how to start timer : use of setInterval and clearInterval
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>timer: {count}</h1>
    </div>
  );
}

export default LearnUseEffect;

```


# How to use Debouncing

```js
import { useEffect, useState } from "react";

function LearnUseEffect() {
  // how to use debounce
  const [search, setSearch] = useState("");

  const [debounce, setDebounced] = useState("");

  useEffect(() => {
    // api call
    const timeOut = setTimeout(() => {
      setDebounced(search);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [search]);

  return (
    <div>
      <h2>{debounce}</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default LearnUseEffect;

```

# How to use Context api 

**create, provider and consumer**

```js
import { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext();
const data1 = createContext();

function LearnContextApiHook() {
  const name = "tanu";
  const gender = "female";
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <h1>Learn Context api hook</h1>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default LearnContextApiHook;
export { data, data1 };

```

```js
import ChildB from "./ChildB";

function ChildA() {
  return (
    <div>
      <h1>This is ChildA</h1>
      <ChildB />
    </div>
  );
}

export default ChildA;


```

```js
import ChildC from "./ChildC";

function ChildB() {
  return (
    <div>
      <h1>This is ChildB</h1>
      <ChildC />
    </div>
  );
}

export default ChildB;

```

```js
import { data } from "./LearnContextApiHook";

function ChildC() {
  return (
    <div>
      <data.Consumer>
        {(name) => {
          return <h1>My name is: {name}</h1>; // How to use context api
        }}
      </data.Consumer>
    </div>
  );
}

export default ChildC;

```

# How to use the useContext Hook

**create,provider and useContext**

```js
import { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext();
const data1 = createContext();

function LearnContextApiHook() {
  const name = "tanu";
  const gender = "female";
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <h1>Learn Context api hook</h1>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default LearnContextApiHook;
export { data, data1 };

```

```js
import ChildB from "./ChildB";

function ChildA() {
  return (
    <div>
      <h1>This is ChildA</h1>
      <ChildB />
    </div>
  );
}

export default ChildA;

```

```js
import ChildC from "./ChildC";

function ChildB() {
  return (
    <div>
      <h1>This is ChildB</h1>
      <ChildC />
    </div>
  );
}

export default ChildB;

```

```js
import { useContext } from "react";
import { data, data1 } from "./LearnContextApiHook";

// how to use useContext Hook
function ChildC() {
  const name = useContext(data);
  const gender = useContext(data1);
  return (
    <div>
      <h2>
        my name is {name} and gender is {gender}
      </h2>
    </div>
  );
}

export default ChildC;

```

# learn useMemo hook

```js
import { useMemo, useState } from "react";

function LearnUseMemoHook() {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(100);

  const multiplication = useMemo(
    function multiply() {
      console.log("I am  doing multiply");
      return increment * 10;
    },
    [increment]
  );

  return (
    <div>
      <h2>Learning useMemo hook</h2>
      <h2> {multiplication}</h2>
      <button onClick={() => setIncrement(increment + 1)}>Increment</button>
      <h2>{increment}</h2>
      <button onClick={() => setDecrement(decrement - 1)}>Decrement</button>
      <h2>{decrement}</h2>
    </div>
  );
}

export default LearnUseMemoHook;

```




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


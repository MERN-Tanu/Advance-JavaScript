import { React, useState } from "react";

function Counter() {
  //   let x = 10;

  function updateX() {
    console.log("updating value of x");
    x += 1;
  }

  function updateCount() {
    setCount(count + 1);
  }

  const [count, setCount] = useState(10);
  const [x, settX] = useState(10);
  const [text, setText] = useState("");

  return (
    <div>
      <span id="counterValue">X: {x}</span>
      <br />
      <span id="counterValue">Count: {count}</span>
      <br />
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <br />
      <br />
      <span>{text}</span>
      <br />
      {/* <button onClick={() => (x += 1)}>Click and update X</button>
       */}
      <button onClick={() => settX(x + 1)}>Click and update X</button>
      <br />
      <button onClick={updateCount}>Click and update Y</button>
    </div>
  );
}

export default Counter;

import React, { useState } from 'react'
import "./style.css";

function Counter({ name }) {

  /*
    When You need to change something take help form react hook and react state



  */

    const [count,setCount] = useState(0);


    const changeCount = (value) =>{
        console.log("Value  "  + value);
        let currCount = count + value;
        console.log("currCount  " + currCount);
        setCount(currCount);
    }

  return (
    <div>
      <h1>Hello Everyone, I am {name},<span style={{ color: "red" }}>Today I learned Hook ,Props and State Concepts , Also I aware of onClick and onChange Event in React 🚀🚀</span></h1>
      <hr />

      <div className="counterApp">
        <strong id='heading'>Counter App</strong>
        <p id='count'>{count}</p>
        <button onClick={()=> changeCount(1)}>Increment</button>
        <button onClick={()=> changeCount(-1)}>Decrement</button>
      </div>

    </div>
  )
}

export default Counter


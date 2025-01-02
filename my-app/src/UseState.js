import React from 'react'
import { useState } from 'react';

function UseState() {

    /* Hook section */
    const [count , setCount] = useState(0);
    function increment(){
      setCount((preCount) => {
        return preCount + 1;
      });
    }
    function decrement(){
      setCount((preCount) => {
        return preCount - 1;
      });
    }

    
    const [randomName , setRandomName] = useState('S');
    function letterFromName2(){
        const myName = "SivaKumar";
        const index = Math.floor(Math.random() * myName.length);
        setRandomName(myName[index])
    }


  return (
    <div>
        {/* Hook section */}
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        <p>{randomName} From SivaKumar!</p>
        <button onClick={letterFromName2}>Click</button>
    </div>
  )
}

export default UseState
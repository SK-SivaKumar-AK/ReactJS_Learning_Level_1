import React from 'react'
import { useState } from 'react';

function Content() {

    function letterFromName(){
        const myName = "SivaKumar";
        const index = Math.floor(Math.random() * myName.length);
        return myName[index];
    }

    const handleClick = (e) => {
      console.log(e);
    }

    const handleClick2 = (name) => {
      console.log(name);
    }

    const handleClick3 = (e) => {
      console.log(e.target.innerText);
    }


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
    <main>
        <p>{letterFromName()} From SivaKumar!</p>
        <p>{randomName} From SivaKumar!</p>
        <button onClick={letterFromName2}>Click</button>
        <button onClick={handleClick}>Click</button>
        <button onClick={ () => handleClick2('SK') }>Click</button>
        <button onClick={ (e) => handleClick3(e) }>Click</button>

        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
    </main>
  )
}

export default Content
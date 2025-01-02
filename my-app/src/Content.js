import React from 'react'

/* Hook section */
// import { useState } from 'react';

function Content() {

    /* function component */
    // function letterFromName(){
    //     const myName = "SivaKumar";
    //     const index = Math.floor(Math.random() * myName.length);
    //     return myName[index];
    // }




    /* Event section */
    // const handleClick = (e) => {
    //   console.log(e);
    // }

    // const handleClick2 = (name) => {
    //   console.log(name);
    // }

    // const handleClick3 = (e) => {
    //   console.log(e.target.innerText);
    // }



    /* Hook section */
    // const [count , setCount] = useState(0);
    // function increment(){
    //   setCount((preCount) => {
    //     return preCount + 1;
    //   });
    // }
    // function decrement(){
    //   setCount((preCount) => {
    //     return preCount - 1;
    //   });
    // }

    // const [randomName , setRandomName] = useState('S');

    // function letterFromName2(){
    //     const myName = "SivaKumar";
    //     const index = Math.floor(Math.random() * myName.length);
    //     setRandomName(myName[index])
    // }

  return (
    <main>

        {/*  function component  */}
        {/* <p>{letterFromName()} From SivaKumar!</p> */}


        {/* Event section */}
        {/* <button onClick={handleClick}>Click</button>
        <button onClick={ () => handleClick2('SK') }>Click</button>
        <button onClick={ (e) => handleClick3(e) }>Click</button> */}


        {/* Hook section */}
        {/* <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        <p>{randomName} From SivaKumar!</p>
        <button onClick={letterFromName2}>Click</button> */}
    </main>
  )
}

export default Content
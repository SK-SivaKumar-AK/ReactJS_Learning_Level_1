import React from 'react'

function FunComponent() {

    /* function component */
    function letterFromName(){
        const myName = "SivaKumar";
        const index = Math.floor(Math.random() * myName.length);
        return myName[index];
    }
    return (
        <div>
            {/*  function component  */}
            <p>{letterFromName()} From SivaKumar!</p>
        </div>
    )
}

export default FunComponent
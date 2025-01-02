import React from 'react'

function Events() {

    /* Event section */
    const handleClick = (e) => {
        console.log(e);
    }

    const handleClick2 = (name) => {
        console.log(name);
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }
    return (
        <div>
            {/* Event section */}
            <button onClick={handleClick}>Click</button>
            <button onClick={ () => handleClick2('SK') }>Click</button>
            <button onClick={ (e) => handleClick3(e) }>Click</button>
        </div>
    )
}

export default Events
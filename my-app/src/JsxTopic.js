import React from 'react'

function JsxTopic() {
    function letterFromName(){
        const myName = "SivaKumar";
        const index = Math.floor(Math.random() * myName.length);
        return myName[index];
    }

    return (
    <div>
        <h1>{letterFromName()} From "SivaKumar"</h1>
    </div>
    );
}

export default JsxTopic
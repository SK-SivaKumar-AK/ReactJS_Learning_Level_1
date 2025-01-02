import React from 'react'

const Header = () => {

  /* Applying style */
  const headerStyle = {backgroundColor : "mediumblue" , color : "white"};

  return (
    <header >
        <h1 style={headerStyle}>To do List</h1>
    </header>
  )
}

export default Header
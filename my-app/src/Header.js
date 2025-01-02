import React from 'react'

const Header = ( {headingName = 'To Do List'} ) => {

  /* Applying style */
  const headerStyle = {backgroundColor : "mediumblue" , color : "white"};

  return (
    <header >
        <h1 style={headerStyle}>{headingName}</h1>
    </header>
  );
};


export default Header;
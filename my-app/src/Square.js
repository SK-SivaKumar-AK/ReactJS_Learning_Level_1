import React from 'react'
import './Square.css';

const Square = ( {colorName , hexColorValue , isDark} ) => {
  return (
    <div>
        <section className='square' style={{backgroundColor: colorName , color: isDark? '#000' : '#FFF'}}>
            <p>{colorName ? colorName : 'Empty Value'}</p>
            <p>{hexColorValue ? hexColorValue : null}</p>
        </section>
    </div>
  )
}

export default Square
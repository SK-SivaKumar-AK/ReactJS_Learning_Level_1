import React from 'react'
import colorNames from 'colornames'


const Input = ( {colorName , setColorName , setHexColorValue , isDark , setIsDark} ) => {
  return (
    <div>
        <form onSubmit={ (e) => {e.preventDefault()} }>
            <label htmlFor="">Add Color Name</label>
            <input type="text" name="" id="" value={colorName} placeholder='Add Color' onChange={ (e) => {setColorName(e.target.value); setHexColorValue(colorNames(e.target.value))} }/>
            <button type='button' onClick={ () => {setIsDark(!isDark)} }>Toggle Text Color</button>
        </form>
    </div>
  )
}

export default Input
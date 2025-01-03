import React from 'react'
import Square from './Square'
import Input from './Input'
import { useState } from 'react'

const CodeChallenge = () => {

    const [colorName , setColorName] = useState('');
    const [hexColorValue , setHexColorValue] = useState('');
    const [isDark , setIsDark] = useState(true);

  return (
    <div>
        <Square colorName={colorName} hexColorValue={hexColorValue} isDark={isDark}/>
        <Input colorName = {colorName} setColorName={setColorName} setHexColorValue={setHexColorValue} isDark={isDark} setIsDark={setIsDark}/>
    </div>
  )
}

export default CodeChallenge
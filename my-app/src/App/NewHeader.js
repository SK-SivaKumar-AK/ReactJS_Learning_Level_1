import React from 'react'

const NewHeader = ( {title = ''} ) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

export default NewHeader
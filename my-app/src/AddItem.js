import React from 'react'
import { FaPlus } from 'react-icons/fa';
import './AddItem.css';
import { useRef } from 'react';

const AddItem = ( {handleSubmit , newItems , setNewItems} ) => {

  const reference = useRef();
  

  return (
    <div>
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input type="text" name='addItem' autoFocus id='addItem' value={newItems} placeholder='Add Item' required onChange={ (e) => setNewItems(e.target.value) } ref={reference}/>
            <button type='submit' aria-label='Add Item' onClick={ () => {reference.current.focus()} }><FaPlus/></button>
        </form>
    </div>
  )
}

export default AddItem
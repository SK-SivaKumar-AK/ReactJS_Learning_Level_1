import React from 'react'
import { FaPlus } from 'react-icons/fa';
import './AddItem.css';

const AddItem = ( {handleSubmit , newItems , setNewItems} ) => {
  return (
    <div>
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input type="text" autoFocus id='addItem' value={newItems} placeholder='Add Item' required onChange={ (e) => setNewItems(e.target.value) }/>
            <button type='submit' aria-label='Add Item'><FaPlus/></button>
        </form>
    </div>
  )
}

export default AddItem
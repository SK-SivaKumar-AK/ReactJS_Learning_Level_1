import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const PropsGGchild = ( {item , handleCheck , handleDelete} ) => {
  return (
    <div>
        <li className='item' key={item.id}>
            <input type="checkbox" checked= {item.checked} onChange={() => handleCheck(item.id)} />
            <label  style={ (item.checked)? {textDecoration : 'line-through'} : null }>{item.itemName}</label>
            <FaTrashAlt onClick={() => handleDelete(item.id)} />
        </li>
    </div>
  )
}

export default PropsGGchild
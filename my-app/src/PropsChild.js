import React from 'react'
import PropsGchild from './PropsGchild';
import './listKey.css';

function PropsChild( {items , handleCheck , handleDelete} ) {
  return (
    <div>
        {
            items.length > 0 ? (
                <PropsGchild items = {items} handleCheck = {handleCheck} handleDelete = {handleDelete}/>
            ) : (
                <p>Item is Empty!</p>
            )
        }
    </div>
  )
}

export default PropsChild
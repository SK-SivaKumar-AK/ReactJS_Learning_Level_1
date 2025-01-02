import React from 'react'
import PropsGGchild from './PropsGGchild';

const PropsGchild = ( {items , handleCheck , handleDelete} ) => {
  return (
    <div>
        <ul>
            {items.map( (item) => {
                return(
                    <PropsGGchild item = {item} handleCheck = {handleCheck} handleDelete = {handleDelete}/>
                );
            } )}
        </ul>
    </div>
  )
}

export default PropsGchild
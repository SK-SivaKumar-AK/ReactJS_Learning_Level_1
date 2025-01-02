import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import './listKey.css';

function ListKey() {

    const allItems = [
        {
            id : 1,
            checked : true,
            itemName : "Mobile"
        },
        {
            id : 2,
            checked : false,
            itemName : "Laptop"
        },
        {
            id : 3,
            checked : true,
            itemName : "AasdasdaC"
        },
    ];
    const [items , setItems] = useState(allItems);

    const handleCheck = (id) => {
        const listItem = items.map( (item) => {
            return item.id === id ? { ...item , checked : !item.checked } : item;
        } );
        setItems(listItem);
    }
    const handleDelete = (id) => {
        const listItem = items.filter( (item) => {
            return item.id !== id;
        } );
        setItems(listItem);
    }

  return (
    <div>
        {
            items.length > 0 ? (
                <ul>
                    {items.map( (item) => {
                        return(
                            <li className='item' key={item.id}>
                                <input type="checkbox" checked= {item.checked} onChange={() => handleCheck(item.id)} />
                                <label  style={ (item.checked)? {textDecoration : 'line-through'} : null }>{item.itemName}</label>
                                <FaTrashAlt onClick={() => handleDelete(item.id)} />
                            </li>
                        );
                    } )}
                </ul>
            ) : (
                <p>Item is Empty!</p>
            )
        }
        
    </div>
  )
}

export default ListKey
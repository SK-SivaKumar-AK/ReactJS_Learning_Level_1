import React from 'react'
import { useState } from 'react';
import PropsChild from './PropsChild'

function PropsParent() {

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
        <PropsChild items = {items} handleCheck = {handleCheck} handleDelete = {handleDelete}/>
    )
}

export default PropsParent
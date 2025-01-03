import React from 'react'
import { useState , useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import AddItem from "./AddItem";
import SearchItem from './SearchItem';
import './listKey.css'; 


const HooksConcept = () => {

    /* useeffect load only first time or if any variable value change then the [<variable name>] then the hook rendering */
    useEffect( () => {
        console.log('Render');
    } , [] );

    const [items , setItems] = useState( JSON.parse(localStorage.getItem('todo_list')) || []);

    const handleCheck = (id) => {
        const listItem = items.map( (item) => {
            return item.id === id ? { ...item , checked : !item.checked } : item;
        } );
        setItems(listItem);
        localStorage.setItem('todo_list' , JSON.stringify(listItem));
    }
    const handleDelete = (id) => {
        const listItem = items.filter( (item) => {
            return item.id !== id;
        } );
        setItems(listItem);
        localStorage.setItem('todo_list' , JSON.stringify(listItem));
    }


    const [newItems , setNewItems] = useState('');
    const addNewItem = (addingItem) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const addingItemData = {
            id : id,
            checked: false,
            itemName : addingItem
        }
        const listItems = [...items , addingItemData];
        setItems(listItems);
        localStorage.setItem('todo_list' , JSON.stringify(listItems));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newItems){
            return;
        }
        addNewItem(newItems);
        setNewItems('');
    }

    const [searchItems , setSearchItems] = useState('');
    return (
        <div>
            {/* usehook concept in add item component */}
            <AddItem handleSubmit = {handleSubmit} newItems = {newItems} setNewItems = {setNewItems}/>
            
            <SearchItem searchItems = {searchItems} setSearchItems = {setSearchItems}/>
            {
                items.length > 0 ? (
                    <ul>
                        {items.filter( (filteredVal) => {
                            return filteredVal.itemName.toLowerCase().includes(searchItems.toLowerCase())
                        } ).map( (item) => {
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

export default HooksConcept
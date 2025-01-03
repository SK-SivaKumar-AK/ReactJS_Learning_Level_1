import React from 'react'
import { useState , useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import AddItem from "./AddItem";
import SearchItem from './SearchItem';
import './listKey.css';

const ApiFetch = () => {

    const API_URL = 'http://localhost:3500/items';

    const [items , setItems] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    
    useEffect( () => {
        const fetchItem = async () => {
            try {
                const response = await fetch(API_URL);
                if(response == null){
                    throw Error('Data Not Received');
                }
                console.log(response);
                const listItem = await response.json();
                console.log(listItem);
                setItems(listItem);
            } catch (error) {
                console.log(error.stack);   
            } finally{
                setIsLoading(false);
            }
        }

        setTimeout(() => {
            (async () => {
                await fetchItem()
            })()
        } , 2000 );
        
    } , [] );

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
        <AddItem handleSubmit = {handleSubmit} newItems = {newItems} setNewItems = {setNewItems}/>
        <SearchItem searchItems = {searchItems} setSearchItems = {setSearchItems}/>
        {
            isLoading ? (<p>Please wait! Loading...</p>) : ('')
        }
        {
            items.length > 0 && !isLoading ? (
                <ul>
                    {
                        items.filter( (filteredVal) => {
                            return filteredVal.itemName.toLowerCase().includes(searchItems.toLowerCase())
                        } ).map( (item) => {
                            return(
                                <li className='item' key={item.id}>
                                    <input type="checkbox" checked= {item.checked} onChange={() => handleCheck(item.id)} />
                                    <label  style={ (item.checked)? {textDecoration : 'line-through'} : null }>{item.itemName}</label>
                                    <FaTrashAlt onClick={() => handleDelete(item.id)} />
                                </li>
                            );
                        } )
                    }
                </ul>
            ) : (  
                (!isLoading)? (<p>Item is Empty!</p>) : ('') 
            )
        }
    </div>
  )
}

export default ApiFetch
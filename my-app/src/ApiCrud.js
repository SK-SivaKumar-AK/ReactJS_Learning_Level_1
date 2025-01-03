import React from 'react'
import { useState , useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import AddItem from "./AddItem";
import SearchItem from './SearchItem';
import './listKey.css';
import apiRequest from './ApiRequest';

const ApiCrud = () => {

    const API_URL = 'http://localhost:3500/items';
    
    const [items , setItems] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [newItems , setNewItems] = useState('');
    const [searchItems , setSearchItems] = useState('');
    



    useEffect( () => {
        const fetchItem = async () => {
            try {
                const response = await fetch(API_URL);
                if(response == null){
                    throw Error('Data Not Received');
                }
                const listItem = await response.json();
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




    const handleCheck = async (id) => {
        const listItem = items.map( (item) => {
            return item.id === id ? { ...item , checked : !item.checked } : item;
        } );
        setItems(listItem);


        const updatedItem = listItem.filter((upditem) => {
            return upditem.id === id;
        });
        const updatedOption = {
            method : 'PATCH',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({checked : updatedItem[0].checked})  
        }
        const updUrl = `${API_URL}/${id}`;
        const update = await apiRequest(updUrl , updatedOption);
        if(update){
            console.log(update);
        }
    }


    const handleDelete = async (id) => {
        
        const listItem = items.filter( (item) => {
            return item.id !== id;
        } );
        setItems(listItem);

        const deleteOption = {
            method : 'DELETE'
        }
        const updUrl = `${API_URL}/${id}`;
        const deleteVal = await apiRequest(updUrl , deleteOption);
        if(deleteVal){
            console.log(deleteVal);
        }
    }


    
    const addNewItem = async (addingItem) => {
        const id = items.length ? Number(items[items.length - 1].id) + 1 : 1;
        
        const addingItemData = {
            id : String(id),
            checked: false,
            itemName : addingItem
        }
        const listItems = [...items , addingItemData];
        setItems(listItems);
        

        const postOption = {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(addingItemData)
        }
        const upload = await apiRequest(API_URL , postOption);
        if(upload){
            console.log(upload);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newItems){
            return;
        }
        addNewItem(newItems);
        setNewItems('');
    }

    

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
                                        <input type="checkbox" name={`itemCheck_${item.id}`} id={`itemCheck_${item.id}`} checked= {item.checked} onChange={() => handleCheck(item.id)} />
                                        <label htmlFor={`itemCheck_${item.id}`} style={ (item.checked)? {textDecoration : 'line-through'} : null }>{item.itemName}</label>
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

export default ApiCrud
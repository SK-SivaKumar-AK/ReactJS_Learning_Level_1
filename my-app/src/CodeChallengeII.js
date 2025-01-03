import React from 'react'
import { useState , useEffect } from 'react'
import CodeForm from './CodeForm';

const CodeChallengeII = () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/';
    const [reqType , setReqType] = useState('users');
    const [items , setItems] = useState([]);

    useEffect( () => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}/${reqType}`);
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchItems();
    } , [reqType] );

  return (
    <div>
        <CodeForm reqType={reqType} setReqType={setReqType}/>
        <ul>
            {
                items.map( (item) => {
                    return <li key={item.id}>{JSON.stringify(item)}</li>
                } )
            }
        </ul>
    </div>
  )
}

export default CodeChallengeII
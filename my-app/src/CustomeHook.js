import React from 'react'
import useFetch from './useFetchApiHook'

const CustomeHook = () => {

    const API_URL = 'http://localhost:3500/items';
    const fetchResult = useFetch(API_URL);
    if (fetchResult.loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            {JSON.stringify(fetchResult.data)}
        </div>
    )
}

export default CustomeHook
import React, { createContext, useState, useEffect } from 'react';

import Data from '../data.js';

export const DataContext = createContext();

export const DataProvider = ( props ) => {
    const [products, setProducts] = useState([])
    
    useEffect( () => { 
        const product = Data.items;
        
        if (product) {
            setProducts(product)
        } else {
            setProducts([])
        }

    }, []);

    const value = {
        products: [products]
    }

    return (
        <DataContext.Provider value = {value}>
            { props.children }
        </DataContext.Provider>
    )
}

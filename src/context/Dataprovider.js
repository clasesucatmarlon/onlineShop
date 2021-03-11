import React, { createContext, useState, useEffect } from 'react';

import Data from '../data.js';

export const DataContext = createContext();

export const DataProvider = ( props ) => {
    // Manage the products
    const [products, setProducts] = useState([]);
    // Manage component modal of car
    const [menu, setMenu] = useState(false);
    // Manage product of car
    const [car, setCar] = useState([]);
    // Manage Total
    const [total, setTotal] = useState(0);
    
    useEffect( () => { 
        const product = Data.items;
        
        if (product) {
            setProducts(product)
        } else {
            setProducts([])
        }
    }, []);

    const addCar = (id) => {
        const check = car.every(item => {
            return item.id !== id;
        }) 
        if (check) {
            const data = products.filter(prod => {
                return prod.id === id
            })
            setCar([...car, ...data])
        } else {
            alert('The product is already in your cart!!!')
        }
    }

    useEffect(() => {
        const dataCar = JSON.parse(localStorage.getItem('dataCar'))
        if(dataCar) {
            setCar(dataCar);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCar', JSON.stringify(car))
    }, [car])

    useEffect( () => {
        const getTotal = () => {
            const res = car.reduce((prev, item) =>  {
                return prev + (item.price * item.cantidad)
            }, 0)
            setTotal(res)
        }
        getTotal();
    }, [car])

    const value = {
        products: [products],
        menu: [menu, setMenu],
        addCar: addCar,
        car: [car, setCar],
        total: [total, setTotal]
    }

    return (
        <DataContext.Provider value = {value}>
            { props.children }
        </DataContext.Provider>
    )
}

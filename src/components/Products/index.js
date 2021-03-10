import React, { useContext } from "react";

import ProductItem from './productItem'
import { DataContext } from '../../context/Dataprovider';

const ListProducts = () => {

    const value = useContext( DataContext );
    const [products] = value.products;

    console.log(products);

    return (
        <>
            <h1 className="title">PRODUCTS</h1>
            <div className="products">
                {
                    products.map (product => (
                        <ProductItem 
                            key={product.id}
                            id={product.id}
                            title= {product.title}
                            price={product.price}
                            image={product.image}
                            category={product.category}
                            img1={product.img1}
                            img2={product.img2}
                            cant={product.cantidad}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default ListProducts;

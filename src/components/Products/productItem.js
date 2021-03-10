import React from "react";
import imageCard from "../../assets/images/img01.jpg";

const ProductItem = ({ id, title, price, image, category, img1, img2, cant, }) => {
    
    return (

        <div className="product">
            <a href="/#">
                <div className="product__img">
                    <img src={image.default} alt={title} />
                </div>
            </a>
            <div className="product__footer">
                <h1>{title}</h1>
                <p>{category}</p>
                <p className="price">${price}</p>
            </div>
            <div className="button">
                <button className="btn btn__add">Add to car</button>
                <div className="btn__view">
                    <a href="/#" className="btn">
                        View
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;

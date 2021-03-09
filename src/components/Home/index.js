import React from "react";
import { Link } from "react-router-dom";

import Portait from "../../assets/images/onlineShop1.jpg";

const Home = () => {
    return (
        <div className="home">
            {/*            <Link to="/" >
                <h1>HOME</h1>
            </Link>
            <Link to="/products" >
                <h1>PRODUCTS</h1>
            </Link> */}
            <img src={Portait} alt={Portait} />
        </div>
    );
};

export default Home;

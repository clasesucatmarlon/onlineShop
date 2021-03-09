import boxicons from 'boxicons';
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/Nike.jpg'

function Header() {
    return (
        <header>
            {/* ***************************************************************  LOGO */}
            <Link to="/">
                <div className="logo">
                    <img src={ Logo } alt="Logo" width="150"/>
                </div>
            </Link>
            {/* ***************************************************************  MENU */}
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
            {/* ***************************************************************  SHOPPING CART */}
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div>
        </header>
    )
}

export default Header;

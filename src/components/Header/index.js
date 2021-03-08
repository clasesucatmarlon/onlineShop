import boxicons from 'boxicons';
import React from 'react';

import Logo from '../../assets/images/Nike.jpg'

function Header() {
    return (
        <header>
            {/* ***************************************************************  LOGO */}
            <a href="/#">
                <div className="logo">
                    <img src={ Logo } alt="Logo" width="150"/>
                </div>
            </a>
            {/* ***************************************************************  MENU */}
            <ul>
                <li>
                    <a href="/#">Home</a>
                </li>
                <li>
                    <a href="/#">Products</a>
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

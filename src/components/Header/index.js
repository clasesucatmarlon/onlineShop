/* import boxicons from 'boxicons'; */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/Dataprovider'

import Logo from '../../assets/images/logo.png'

function Header() {

    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [car] = value.car;

    console.log('Hola: ', menu);

    const toogleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header>
            {/* ***************************************************************  LOGO */}
            <Link to="/">
                <div className="logo">
                    <img src={ Logo } alt="Logo" width="100" height="100"/>
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
            <div className="cart" onClick={ toogleMenu }>
                <box-icon name="cart"></box-icon>
                <span className="item__total"> { car.length }</span>
            </div>
        </header>
    )
}

export default Header;

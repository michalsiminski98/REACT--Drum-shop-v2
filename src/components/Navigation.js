import React from 'react';
import {NavLink} from 'react-router-dom';

import '../styles/Navigation.css';

const navigationList = [
    {name: "Shop", path:'/', exact: true},
    {name: "Contact", path:'/contact'},
    {name: "cart", path:'/cart'},
]

const Navigation = () => {
    const menu = navigationList.map(item => (
        <li key={item.name} className="navigation__li">
            <NavLink to={item.path} exact={item.exact && item.exact}>{item.name === 'cart' ? <i className="fas fa-shopping-cart"></i> : item.name}</NavLink>
        </li>
    ))

    return ( 
        <nav className="navigationWrapper">
            <ul className="navigation">
                {menu}
            </ul>
        </nav>
     );
}

export default Navigation;
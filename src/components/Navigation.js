import React from 'react';
import {NavLink} from 'react-router-dom';

import {connect} from 'react-redux';

import '../styles/Navigation.css';

// items in navigation
const navigationList = [
    {name: "Shop", path:'/', exact: true},
    {name: "Contact", path:'/contact'},
    {name: "cart", path:'/cart'},
]

const Navigation = ({ cart }) => {

    // counter of current items in cart
    let cartCounter = 0;
    const cartCounterFunction = cart.map(item => {
        cartCounter += item.qty;
    });

    // items in navigation
    const menu = navigationList.map(item => (
        <li key={item.name} className="navigation__li">
            <NavLink to={item.path} exact={item.exact && item.exact}>{item.name === 'cart' ? <span className="fas fa-shopping-cart"> {cartCounter} </span> : item.name}</NavLink>
        </li>
    ))

    // showing navigation
    return ( 
        <nav className="navigationWrapper">
            <ul className="navigation">
                {menu}
            </ul>
        </nav>
     );
}

// redux for items counter in cart
const mapStateToProps = state =>{
    return{
        cart: state.shop.cart,
    }
}

export default connect(mapStateToProps)(Navigation);
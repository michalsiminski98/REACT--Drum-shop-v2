import React from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';

import '../styles/ShopPage.css';


const ShopPage = ({products}) => {
    
    const menu = products.map(prod => (
        <Link className="item" key={prod.id} to={{pathname:`product/${prod.name}/${prod.price}`, state:{img:prod.img,productData:{prod}}}} >
        <img className="item__img" src={prod.img} alt={prod.name}/>
        <p className="item__title">{prod.name} <span className="item__price">${prod.price}</span></p>
        </Link>
    ))
    
    
    return ( 
        <section className="shopWrapper">
            {menu}
        </section>
     );
    }

    // redux for showing products from itemReducer.js
    const mapStateToProps = state => {
        return {
            products: state.shop.products,
        }
    }
    
    export default connect(mapStateToProps)(ShopPage);
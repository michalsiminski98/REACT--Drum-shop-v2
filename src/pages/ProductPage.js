import React from 'react';

import { connect } from 'react-redux';
import {addToCart} from '../actions/itemActions';

import '../styles/ProductPage.css';

const ProductPage = (props) => {
    //3 ways of getting data 
    const {name} = props.match.params;
    const {img} = props.location.state;
    const {prod} = props.location.state.productData;

    return ( 
        <section className="product">
            <img src={img} alt={name} className="product__image"/>
            <div className="product__textWrapper">
            <h3 className="product__title">{name}</h3>
            <p className="product__price">Price: <span className="product__span">${prod.price}</span></p>
            <button onClick={() => props.addToCart(prod.id)} className="product__button">Buy</button>
            </div>
        </section>
     );
}

// adding product to cart
const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch(addToCart(id)),
});

export default connect(null, mapDispatchToProps)(ProductPage);
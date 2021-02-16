import React from 'react';

import '../styles/ProductPage.css'

const ProductPage = (props) => {
    console.log(props)
    const {name, price} = props.match.params;
    const {img} = props.location.state;
    return ( 
        <>
        <section className="product">
            <img src={img} alt={name} className="product__image"/>
            <div className="product__textWrapper">
            <h3 className="product__title">{name}</h3>
            <p className="product__price">Price: <span className="product__span">${price}</span></p>
            <button className="product__button">Buy</button>
            </div>
        </section>
        </>
     );
}
 
export default ProductPage;
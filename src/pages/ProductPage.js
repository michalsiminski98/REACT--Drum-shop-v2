import React from 'react';

import a from '../images/header.jpg';

import '../styles/ProductPage.css'

const ProductPage = (props) => {
    console.log(props)
    return ( 
        <>
        <section className="product">
            <img src={a} alt="name" className="product__image"/>
            <div className="product__textWrapper">
            <h3 className="product__title">Crash sash 16</h3>
            <p className="product__price">Price: <span className="product__span">$62</span></p>
            <button className="product__button">Buy</button>
            </div>
        </section>
        </>
     );
}
 
export default ProductPage;
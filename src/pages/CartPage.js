import React from 'react';

import CartItem from './componentForPages/CartItem'

import { connect } from 'react-redux';
import { removeFromCart, adjustQty } from '../actions/itemActions';

import '../styles/CartPage.css';

const CartPage = ({ cart, removeFromCart, adjustQty }) => {

    // counters of total price and total products quantity
    let itemsSummary = 0;
    let priceSummary = 0;
    const totalItemsSummary = cart.map(item => (
        itemsSummary += item.qty
    ));
    const totalPriceSummary = cart.map(item => (
        priceSummary += item.price * item.qty
    ));

    // add number of item
    const handleAddNumberOfItem = (item, e) => {
            adjustQty(item.id, e.target.value);
            if(e.target.value === 0) e.target.value = 1;
    };

    return( 
        <section className="cartWrapper">
            <CartItem
            cart = {cart}
            addNumber = {handleAddNumberOfItem}
            removeFromCart = {removeFromCart}
            />
        </section>
     );}
 
// global storage of cart
const mapStateToProps = state => ({
    cart: state.shop.cart
});
// remove and counter 
const mapDispatchToProps = dispatch => ({
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
})
 
export default connect(mapStateToProps,mapDispatchToProps)(CartPage);

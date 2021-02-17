import React from 'react';

import { connect } from 'react-redux';
import { removeFromCart, adjustQty } from '../actions/itemActions';

import '../styles/CartPage.css';

const CartPage = ({ cart, removeFromCart, adjustQty }) => {

    let itemsSummary = 0;
    let priceSummary = 0;

    const totalItemsSummary = cart.map(item => (
        itemsSummary += item.qty
    ));
    const totalPriceSummary = cart.map(item => (
        priceSummary += item.price * item.qty
    ));

    const showingBuyingItem = cart.map(item => (
        <div key={item.id} className="cartWrapper__item">
            <img src={item.img} alt="item" className="cartWrapper__photo"/>
            <div className="cartWrapper__textWrapper">
                    <p className="cartWrapper__name">{item.name}</p>
                    <p className="cartWrapper__price">${item.price}</p>
                    <input onChange={(e) => {
                        adjustQty(item.id, e.target.value)
                        if(e.target.value === 0) e.target.value = 1}}
                    min='1'
                    max='6'
                    type="number"
                    className="cartWrapper__count"
                    value={item.qty}
                    />
                    <i 
                    onClick={() => removeFromCart(item.id)}  
                    className="fas fa-trash-alt cartWrapper__trash">
                    </i>
            </div>
        </div>
    ));
    return( 
        <section className="cartWrapper">
            {showingBuyingItem}
            {showingBuyingItem.length !== 0 && (
                <>
                    <div className="cartWrapper__totalStats">
                    <p className="cartWrapper__totalcount">Total count: {itemsSummary}</p>
                    <p className="cartWrapper__totalprice">Total price: ${priceSummary}</p>
                    </div>
                    <button className="cartWrapper__button">
                        Order
                    </button>
                </>
            )}

        </section>
     );}
 

     const mapStateToProps = state => {
         return{
             cart: state.shop.cart
         }
     }

const mapDispatchToProps = dispatch => ({
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
})
 
export default connect(mapStateToProps,mapDispatchToProps)(CartPage);

import React, {Component} from 'react';

import img1 from '../images/header.jpg'
import img2 from '../images/header2.jpg'

import '../styles/CartPage.css';

class CartPage extends Component{
    render(){
    return ( 
        <section className="cartWrapper">
            <div className="cartWrapper__item">
                <img src={img1} alt="item" className="cartWrapper__photo"/>
                <div className="cartWrapper__textWrapper">
                    <p className="cartWrapper__name">Crash - 62EF</p>
                    <p className="cartWrapper__price">$62</p>
                </div>
            </div>
            <div className="cartWrapper__item">
                <img src={img2} alt="item" className="cartWrapper__photo"/>
                <div className="cartWrapper__textWrapper">
                    <p className="cartWrapper__name">Crash - 62EF</p>
                    <p className="cartWrapper__price">$62</p>
                </div>
            </div>
            <button className="cartWrapper__button">
                Order
            </button>
        </section>
     );
    }
}
 
export default CartPage;
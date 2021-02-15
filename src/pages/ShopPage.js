import React from 'react';

import '../styles/ShopPage.css';

const items = [
    {id: 1, name: 'crash-meinl-aa', img: '../images/shop/crash-meinl-aa.jpg', price:52},
    {id: 2, name: 'crash-sabian-aax', img: '../images/shop/crash-sabian-aax.png', price:20},
]

const ShopPage = () => {
    
    const menu = items.map(item => (
        <div className="item" key={item.id}>
        <img className="item__img" src={item.img} alt={item.name}/>
        <p className="item__title">{item.name}</p>
        </div>
    ))
    
    return ( 
        <section className="shopWrapper">
            {menu}
        </section>
     );
    }

export default ShopPage;
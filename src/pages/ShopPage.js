import React from 'react';

import '../styles/ShopPage.css';

const items = [
    {id: 1, name: 'Crash Meinl Classic AA', img: 'https://images-na.ssl-images-amazon.com/images/I/61Pp-LukfuL._AC_SL1002_.jpg', price:52},
    {id: 2, name: 'Crash Meinl HCS AA', img: 'https://thumbs.static-thomann.de/thumb/orig/pics/bdb/111021/15378232_800.jpg', price:60},
    {id: 2, name: 'Crash Meinl HCS AA', img: 'https://thumbs.static-thomann.de/thumb/orig/pics/bdb/111021/15378232_800.jpg', price:60},
    {id: 2, name: 'Crash Meinl HCS AA', img: 'https://thumbs.static-thomann.de/thumb/orig/pics/bdb/111021/15378232_800.jpg', price:60},
    {id: 2, name: 'Crash Meinl HCS AA', img: 'https://thumbs.static-thomann.de/thumb/orig/pics/bdb/111021/15378232_800.jpg', price:60},
    {id: 2, name: 'Crash Meinl HCS AA', img: 'https://thumbs.static-thomann.de/thumb/orig/pics/bdb/111021/15378232_800.jpg', price:60},
]

const ShopPage = () => {
    
    const menu = items.map(item => (
        <div className="item" key={item.id}>
        <img className="item__img" src={item.img} alt={item.name}/>
        <p className="item__title">{item.name} <span className="item__price">${item.price}</span></p>
        </div>
    ))
    
    return ( 
        <section className="shopWrapper">
            {menu}
        </section>
     );
    }

export default ShopPage;
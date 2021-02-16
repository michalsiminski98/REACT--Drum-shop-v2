import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/ShopPage.css';

const items = [
    {id: 1, name: 'Crash Meinl Classic AA', img: 'https://images-na.ssl-images-amazon.com/images/I/61Pp-LukfuL._AC_SL1002_.jpg', price:52},
    {id: 2, name: 'Crash Meinl HCS AA', img: 'https://thumbs.static-thomann.de/thumb/orig/pics/bdb/111021/15378232_800.jpg', price:60},
    {id: 3, name: 'Crash Meinl HCS AA', img: 'https://thumbs.static-thomann.de/thumb/orig/pics/bdb/111021/15378232_800.jpg', price:60},
    {id: 4, name: 'Crash Meinl HCS AA', img: 'https://thumbs.static-thomann.de/thumb/orig/pics/bdb/111021/15378232_800.jpg', price:60},
    {id: 5, name: 'Crash Meinl HCS AA', img: 'https://thumbs.static-thomann.de/thumb/orig/pics/bdb/111021/15378232_800.jpg', price:60},
    {id: 6, name: 'Crash Meinl HCS AA', img: 'https://thumbs.static-thomann.de/thumb/orig/pics/bdb/111021/15378232_800.jpg', price:60},
    {id: 7, name: 'Crash Meinl HCS AA', img: 'https://thumbs.static-thomann.de/thumb/orig/pics/bdb/111021/15378232_800.jpg', price:60},
    {id: 8, name: 'Crash Meinl HCS AA', img: 'https://thumbs.static-thomann.de/thumb/orig/pics/bdb/111021/15378232_800.jpg', price:60},
    {id: 9, name: 'Crash Meinl HCS AA', img: 'https://thumbs.static-thomann.de/thumb/orig/pics/bdb/111021/15378232_800.jpg', price:60},
]

const ShopPage = () => {
    
    const menu = items.map(item => (
        <Link className="item" key={item.id} to={{pathname:`product/${item.name}/${item.price}`, state:{img:item.img}}} >
        <img className="item__img" src={item.img} alt={item.name}/>
        <p className="item__title">{item.name} <span className="item__price">${item.price}</span></p>
        </Link>
    ))
    
    return ( 
        <section className="shopWrapper">
            {menu}
        </section>
     );
    }

export default ShopPage;
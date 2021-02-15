import React from 'react';

const items = [
    {id: 1, name: 'drum', price:52},
    {id: 2, name: 'crash', price:20},
    {id: 3, name: 'hi-hat', price:100},
    {id: 4, name: 'tom', price:90},
    {id: 5, name: 'tom-12', price:5},
]

const ShopPage = () => {
    
    const menu = items.map(item => (
        <div>
            asd
        </div>
    ))
    
    return ( 
        <section className="shopWrapper">
            {menu}
        </section>
     );
    }


 
export default ShopPage;
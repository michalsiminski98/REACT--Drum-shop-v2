import * as ActionTypes from '../actions/itemTypes';

const INITIAL_STATE = {
    products: [
        {id: 1, name: 'Crash Meinl Classic AA', img: 'https://images-na.ssl-images-amazon.com/images/I/61Pp-LukfuL._AC_SL1002_.jpg', price:52},
        {id: 2, name: 'Crash Meinl HCS AA', img: 'https://thumbs.static-thomann.de/thumb/orig/pics/bdb/111021/15378232_800.jpg', price:60},
        {id: 3, name: 'Crash Sabian AAX', img: 'https://cdn11.bigcommerce.com/s-5a0e4/images/stencil/1280x1280/products/1484/3121/218XISOCB-large__19663.1542158988.jpg?c=2', price:120},
        {id: 4, name: 'Crash Sabian AA', img: 'https://media.sweetwater.com/api/i/q-82__ha-6d4d64d6ab00792b__hmac-91d8800b5692373b37770f1ba7022fec5ec1ed74/images/items/750/21609-large.jpg', price:100},
        {id: 5, name: 'Ride Sabian SBR', img: 'https://www.thomann.de/pics/bdb/319644/14606073_800.jpg', price:90},
        {id: 6, name: 'Ride Sabian B8X', img: 'https://media.sweetwater.com/api/i/q-82__ha-72773d11c1e663af__hmac-7049237425a44b8e8057246b451bacd8b4aee29a/images/items/750/42012X-large.jpg', price:150},
        {id: 7, name: 'Hi-Hat Istanbul Agop', img: 'https://thumbs.static-thomann.de/thumb/orig/pics/bdb/265124/13514976_800.jpg', price:350},
        {id: 8, name: 'Hi-Hat Zildjian K', img: 'https://www.prodrum.pl/dane/full/2/277275af701543caabf498f71c98d6ba.jpg', price:800},
        {id: 9, name: 'China Zildjian High', img: 'https://media.sweetwater.com/api/i/q-85__ha-d1025e51ec219d55__hmac-96cda30c0cbbe4e1ee9f86047608bcd0fa848ba4/images/items/1800/A0354-xlarge.jpg', price:280},
    ], //{id, name, price, img}
    cart: [], //{id, name, price, img, qty(QTY-QUANTITY)}
    currentItem: null,
}

const itemReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        // adding in specific item page
        case ActionTypes.ADD:
        const item = state.products.find(product => product.id === action.payload.id);
        // check if item is in cart already
        const inCart = state.cart.find(product => product.id === action.payload.id ? true : false)
        return {
            ...state,
            cart: inCart ?
            state.cart.map(item =>
            item.id === action.payload.id ? 
            {...item, qty: item.qty + 1} : item) : 
            [...state.cart, {...item, qty:1}]
        };

        // removing item from cart section
        case ActionTypes.REMOVE:
        return {
            ...state,
            cart:state.cart.filter(item => item.id !== action.payload.id)
        };

        // decreasing/ increasing count of item in cart section
        case ActionTypes.ADJUST_QTY:
        return {
            ...state,
            cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: +action.payload.qty} : item)
        };
        
        // other
        default:
            console.log(`Wrong action "${action.type}"`);
            return state;
    }
}

export default itemReducer;
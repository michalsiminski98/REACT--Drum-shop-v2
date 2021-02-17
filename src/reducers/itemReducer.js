import * as ActionTypes from '../actions/itemTypes';

const INITIAL_STATE = {
    products: [
        {id: 1, name: 'Crash Meinl Classic AA', img: 'https://images-na.ssl-images-amazon.com/images/I/61Pp-LukfuL._AC_SL1002_.jpg', price:52},
        {id: 2, name: 'Crash Meinl HCS AA', img: 'https://thumbs.static-thomann.de/thumb/orig/pics/bdb/111021/15378232_800.jpg', price:60},
    ], //{id, title, price, img}
    cart: [], //{id, title, price, img, qty}
    currentItem: null,
}

const itemReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ActionTypes.ADD:

        const item = state.products.find(prod => prod.id === action.payload.id);
        // check if item is in cart already
        const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)

        return {
            ...state,
            cart: inCart ?
                state.cart.map(item =>
                item.id === action.payload.id ? 
                {...item, qty: item.qty + 1} : item) : 
                [...state.cart, {...item, qty:1}]
        };

        case ActionTypes.REMOVE:
        return {
            ...state,
            cart:state.cart.filter(item => item.id !== action.payload.id)
        };

        case ActionTypes.ADJUST_QTY:
        return {
            ...state,
            cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: +action.payload.qty} : item)
        };

        case ActionTypes.LOAD_CURRENT_ITEM:
        return {
            ...state,
            currentItem: action.payload,
        };
        
        default:
            console.log(`Wrong action "${action.type}"`);
            return state;
    }
}

export default itemReducer;
import * as ActionTypes from './itemTypes';

// adding in specific item page
export const addToCart = (itemID) => {
    return{
    type:ActionTypes.ADD,
    payload:{
        id : itemID,
    }
}}

// removing item in cart section
export const removeFromCart = (itemID) => ({
    type:ActionTypes.REMOVE,
    payload:{
        id : itemID,
    }
})

// decreasing/ increasing count of item in cart section
export const adjustQty = (itemID, value) => ({
    type:ActionTypes.ADJUST_QTY,
    payload:{
        id : itemID,
        qty: value,
    }
})
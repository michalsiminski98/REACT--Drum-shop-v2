import * as ActionTypes from './itemTypes';

export const addToCart = (itemID) => {
    return{
    type:ActionTypes.ADD,
    payload:{
        id : itemID,
    }
}}

export const removeFromCart = (itemID) => ({
    type:ActionTypes.REMOVE,
    payload:{
        id : itemID,
    }
})

export const adjustQty = (itemID, value) => ({
    type:ActionTypes.ADJUST_QTY,
    payload:{
        id : itemID,
        qty: value,
    }
})

export const LoadCurrentItem = (item) => ({
    type:ActionTypes.LOAD_CURRENT_ITEM,
    payload: item,
})
import {combineReducers} from 'redux';

import itemReducer from './itemReducer';

export const rootReducer = combineReducers({
    shop: itemReducer,
});
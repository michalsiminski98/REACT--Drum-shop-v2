import {createStore} from 'redux';
import {rootReducer} from '../reducers/rootReducer';

// extend for Chrome Dev Tools
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools());

export default store;
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Products} from './products';
import {Cart} from './cart';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


export const ConfigureStore = () => {

    const store = createStore(
        combineReducers({
            products: Products,
            cart: Cart 
        }),
         applyMiddleware( thunk, logger ) //inhance cua createStore, dùng để chặn hành động -> thực hiện fetch trước (nêú có)
    )
    return store; 
    
}
import * as ActionTypes from './ActionType';

export const Cart = ( state = {
    isLoading : true,
    errMess : null,
    cart : []
}, action) => { 
    switch (action.type) {
        case ActionTypes.ADD_CART:
            return { ...state, 
                isLoading: false, errMess: null, cart: action.payload };

        case ActionTypes.CART_LOADING:
            return { ...state, 
                isLoading: true, errMess: null, cart: [] }

        case ActionTypes.CART_FAILED: 
            return { ...state,
                 isLoading: false, errMess: action.payload };

        default:
            return state;
    }
}
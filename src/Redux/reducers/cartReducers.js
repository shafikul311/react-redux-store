import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: []
}


const cartReducer = ( state, action ) => {
    switch(action.type){

        case ADD_TO_CART: 
        const newId = action.id;
        const newCart = [...state.cart, newId]
        return { cart: newCart }
        
        case REMOVE_FROM_CART: 
        const id = action.id;
        const remainingCart = state.cart.filter(item => item !== id);
        return { cart : remainingCart}

        default:
             return state;
    }
}

export default cartReducer;
import { ActionTypes } from "../actionTypes";

const initialState = {
    isLoading: false,
    error: null,
    cart: []
}

const cartReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ActionTypes.CART_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.CART_ERROR:
            return { ...state, isLoading: false, error: action.payload }

        case ActionTypes.CART_SUCCESS:
            return { ...state, isLoading: false, error: null, cart: action.payload }

        case ActionTypes.ADD_ITEM:
            return { ...state, cart: state.cart.concat(action.payload) };

        case ActionTypes.DEL_ITEM:
            const filtered = state.cart.filter((item) => item.id !== action.payload)
            return { ...state, cart: filtered };

        case ActionTypes.UPDATE_ITEM:
            const updated = state.cart.map((item) =>
                item.id === action.payload.id ? action.payload : item)            
            return { ...state, cart: updated };

        default:
            return state;
    }
}
export default cartReducer
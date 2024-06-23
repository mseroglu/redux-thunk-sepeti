import { ActionTypes } from "../actionTypes";

const initialState = {
    isLoading: false,
    error: null,
    restaurant: null,
    products: []
}

const productReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ActionTypes.PRODUCT_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.PRODUCT_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        
        case ActionTypes.PRODUCT_SUCCESS:
            return {...state, 
                isLoading:false, 
                error:null, 
                products:action.payload[0].data,
                restaurant:action.payload[1].data
            }

        default:
            return state;
    }
}
export default productReducer
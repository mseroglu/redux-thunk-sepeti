import api from "../../utils/api"
import { ActionTypes } from "../actionTypes"


export const getDataByRestaurantId = (id) => async (dispatch) => {
    
    dispatch({type: ActionTypes.PRODUCT_LOADING})

    const res1 =  api.get(`/products?restaurantId=${id}`)

    const res2 = api.get(`/restaurants/${id}`)

    try{
        const responses = await Promise.all([res1, res2])       
        dispatch({
            type: ActionTypes.PRODUCT_SUCCESS, 
            payload:responses
        })
    } catch(err){
        dispatch({
            type: ActionTypes.PRODUCT_ERROR, 
            payload:err.message
        })
    }
}


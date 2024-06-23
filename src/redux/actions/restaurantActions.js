import api from "../../utils/api"
import { ActionTypes } from "../actionTypes"

// thunk fonksiyonu dispatch i parametre olarak alan bir fonksiyon return eder
export const getRestaurants = () => (dispatch) => {
    // bu alana async fonksiyonlar yazılabilir 
    dispatch({ type: ActionTypes.REST_LOADING, })

    api.get("/restaurants")
        .then(
            (res) => dispatch(
                {
                    type: ActionTypes.REST_SUCCESS,
                    payload: res.data
                }
            ))
        .catch(
            (err) => dispatch(
                {
                    type: ActionTypes.REST_ERROR,
                    payload: err.message
                }
            ))
}
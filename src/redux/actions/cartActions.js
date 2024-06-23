import { ActionTypes } from "../actionTypes"
import api from "../../utils/api"
import { v4 } from "uuid"
import { toast } from 'react-toastify';

// thunk aksiyonu (async olunca)
export const getCart = () => (dispatch) => {
    dispatch({ type: ActionTypes.CART_LOADING })

    api
        .get("/cart")
        .then((res) =>
            dispatch({
                type: ActionTypes.CART_SUCCESS,
                payload: res.data
            }))
        .catch((err) =>
            dispatch({
                type: ActionTypes.CART_ERROR,
                payload: err.message
            }))
}
// thunk action
export const addToBasket = (product, restName) => (dispatch) => {
    
    const newItem = {
        id: v4(),
        productId: product.id,
        title: product.title,
        price: product.price,
        photo: product.photo,
        restaurantName: restName,
        amount: 1
    }

    api
        .post("/cart", newItem)
        .then(() => {
            dispatch({ type: ActionTypes.ADD_ITEM, payload: newItem })
            toast.success("Ürün sepete eklendi...")
        })
        .catch((err) => toast.error("Bir hata oluştu"))
}
// thunk action
export const updateItem = (id, newAmount) => (dispatch) => {
    api
        .patch(`/cart/${id}`, { amount: newAmount })
        .then((res) => {
            dispatch({
                type: ActionTypes.UPDATE_ITEM,
                payload: res.data
            })
            toast.info("Miktar Güncellendi")
        })
        .catch((err) => toast.error("Üzgünüm bir hata oluştu."))
}
// thunk action
export const deleteItem = (id) => (dispatch) => {

    api
        .delete(`/cart/${id}`)
        .then(() => {
            dispatch({ type: ActionTypes.DEL_ITEM, payload: id })
            toast.warn("Öğe sepetten silindi...")
        })
        .catch(() => toast.warn("Bir hata oluştu!!"))
}
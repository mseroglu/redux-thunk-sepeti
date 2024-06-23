import { combineReducers, createStore, applyMiddleware } from "redux";
import productReducer from "./reducers/productReducer";
import restaurantReducer from "./reducers/restaurantReducer";
import cartReducer from "./reducers/cartReducer";
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({ productReducer, restaurantReducer, cartReducer })

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
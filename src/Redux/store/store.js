import { createStore } from "redux";
import cartReducer from "../reducers/cartReducers";

const store = createStore(cartReducer)

export default store;
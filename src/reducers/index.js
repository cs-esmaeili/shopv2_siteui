import { combineReducers } from "redux";
import { CartReducer ,tokenReducer , needLoadPageReducer } from "../reducers/profile";

export const reducers = combineReducers({
    token: tokenReducer,
    cart: CartReducer,
    needLoadPage: needLoadPageReducer,
});

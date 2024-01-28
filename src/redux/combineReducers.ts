import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import cartSlice from "./features/cart/cartSlice";


export const reducers=combineReducers({
    userSlice,cartSlice
})

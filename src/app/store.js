import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/Cart/CartSlice";
import productsSlice from "../features/Products/productsSlice";

export const store = configureStore({
    reducer : {
        products : productsSlice ,
        cart : cartSlice ,
    }
})
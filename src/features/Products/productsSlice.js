import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../Services/API";

const initialState = {
    data: [],
    isLoading: true,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setData(state, action) {
            return {
                data: [...action.payload],
                isLoading: false,
            }
        }
    }
})

export const fetchData = () => {
    return async (dispatch) => {
        const data = await fetchProducts();
        dispatch(setData(data));
    }
}

export const { requestData, setData } = productsSlice.actions;
export default productsSlice.reducer;
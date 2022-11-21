import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedItems: [],
    totalPrice: 0,
    totalQuantity: 0,
};

const sumItemsDetail = (selectedItems) => {
    const totalQuantity = selectedItems.reduce(
        (total, item) => total + item.quantity
        , 0);

    const totalPrice = selectedItems.reduce(
        (total, item) => total + item.quantity * item.price
        , 0);

    return { totalPrice, totalQuantity };
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            return {
                selectedItems: [...state.selectedItems, { ...action.payload, quantity: 1 }],
                ...sumItemsDetail(state.selectedItems)
            }
        },
        removeItem(state, action) {
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItemsDetail(newSelectedItems),
            }
        },
        incrementItem(state, action) {
            const indexI = state.selectedItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItemsDetail(state.selectedItems),
            }
        },
        decrementItem(state, action) {
            const indexD = state.selectedItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItemsDetail(state.selectedItems),
            }
        },
        clearAll(state) {
            return {
                selectedItems: [],
                totalPrice: 0,
                totalQuantity: 0
            }
        }
    }
});

export const { addItem, removeItem, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;
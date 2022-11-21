import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedItems: [],
    totalPrice: 0,
    totalQuantity: 0,
};

const sumPrice = (selectedItems) => {
    const totalPrice = selectedItems.reduce(
        (total, item) => total + item.quantity * item.price
        , 0);
    return totalPrice;
}

const sumQuantity = (selectedItems) => {
    const totalQuantity = selectedItems.reduce(
        (total, item) => total + item.quantity
        , 0);
    return totalQuantity;
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.selectedItems = [...state.selectedItems, { ...action.payload, quantity: 1 }];
            state.totalPrice = sumPrice(state.selectedItems);
            state.totalQuantity = sumQuantity(state.selectedItems);
        },
        removeItem(state, action) {
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                totalPrice : sumPrice(newSelectedItems),
                totalQuantity : sumQuantity(newSelectedItems),
            }
        },
        incrementItem(state, action) {
            const indexI = state.selectedItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.selectedItems[indexI].quantity += 1;
            state.totalPrice = sumPrice(state.selectedItems);
            state.totalQuantity = sumQuantity(state.selectedItems);
        },
        decrementItem(state, action) {
            const indexD = state.selectedItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.selectedItems[indexD].quantity -= 1;
            state.totalPrice = sumPrice(state.selectedItems);
            state.totalQuantity = sumQuantity(state.selectedItems);
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

export const { addItem, removeItem, incrementItem, decrementItem , clearAll } = cartSlice.actions;
export default cartSlice.reducer;
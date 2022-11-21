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

export const { addItem, removeItem, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;

/*
const userReducer = produce((draft, action) => {
    switch (action.type) {
        case "renameUser":
            // OK: we modify the current state
            draft.users[action.payload.id].name = action.payload.name
            return draft // same as just 'return'
        case "loadUsers":
            // OK: we return an entirely new state
            return action.payload
        case "adduser-1":
            // NOT OK: This doesn't do change the draft nor return a new state!
            // It doesn't modify the draft (it just redeclares it)
            // In fact, this just doesn't do anything at all
            draft = {users: [...draft.users, action.payload]}
            return
        case "adduser-2":
            // NOT OK: modifying draft *and* returning a new state
            draft.userCount += 1
            return {users: [...draft.users, action.payload]}
        case "adduser-3":
            // OK: returning a new state. But, unnecessary complex and expensive
            return {
                userCount: draft.userCount + 1,
                users: [...draft.users, action.payload]
            }
        case "adduser-4":
            // OK: the immer way
            draft.userCount += 1
            draft.users.push(action.payload)
            return
    }
})*/
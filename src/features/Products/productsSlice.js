import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [] , 
    isLoading : false ,
}

export const productsSlice = createSlice({
    name : 'products' ,
    initialState , 
    reducers : {
        requestData (state) {
            return{
                ...state ,
                isLoading : true ,
            }
        } ,
        setData (state , action){
            return{
                data : [...action.payload] ,
                isLoading : false ,
            }
        }
    }
})

export const { requestData , setData } = productsSlice.actions ;
export default productsSlice.reducer ;
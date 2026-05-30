import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : [] ,
    reducers : {
        addItem : (state , action) =>{
            cartSlice.push(action.payload)
        },
        removeItem : (state , action) =>{
            cartSlice.pop()
        }
    }
})
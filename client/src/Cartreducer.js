import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products:[],
  },
  reducers: {
    addtocart: (state,action) => {
      const item=state.products.find((item)=>item.id === action.payload.id)
      if(item){
        item.quantity+=action.payload.quantity
      }
      else{
        state.products.push(action.payload)
      }
    },
    removeitem: (state,action) => {
      state.products=state.products.filter((item)=>item.id!==action.payload)
    },
    resetcart: (state) => {
      state.products=[]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtocart, removeitem, resetcart } = cartSlice.actions

export default cartSlice.reducer
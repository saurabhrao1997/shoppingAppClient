import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishlist: [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes


  let index   =   state.wishlist.findIndex((obj)=> obj?._id == action.payload._id)
  if(index == -1){
    state.wishlist.push(action.payload)
  }else{
    state.wishlist.splice(index,1)
  }
   
     

    },
    RemoveFromWishList: (state,action) => {
        state.wishlist.splice(action.payload,1)
    },
    RemoveAllWishlist: (state) => {
        state.wishlist = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToWishlist, RemoveFromWishList, RemoveAllWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer
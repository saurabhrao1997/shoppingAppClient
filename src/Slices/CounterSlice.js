import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  amount: 1
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += state?.amount
    },
    decrement: (state) => {
      state.value -= state?.amount
    },
    incrementByAmount: (state, action) => {
     
      state.amount = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
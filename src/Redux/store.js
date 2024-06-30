import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {userApi} from "../APi/userAPi"
import {productApi} from "../APi/ProductApi"
import {categoryApi} from "../APi/CategoryApi"

import counterReducer from "../Slices/CounterSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(userApi.middleware)
  .concat(productApi.middleware)
  .concat(categoryApi.middleware),
})
setupListeners(store.dispatch)


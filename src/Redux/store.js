import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {userApi} from "../APi/userAPi"
import {productApi} from "../APi/ProductApi"
import {categoryApi} from "../APi/CategoryApi"
import {reviewApi} from "../APi/ReviewApi"
import {orderApi} from "../APi/OrderApi"
import counterReducer from "../Slices/CounterSlice"
import wishlistReducer from "../Slices/WishListSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    wishlist: wishlistReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [orderApi.reducerPath]:orderApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(userApi.middleware)
  .concat(productApi.middleware)
  .concat(categoryApi.middleware)
  .concat(reviewApi.middleware)
  .concat(orderApi.middleware),
})
setupListeners(store.dispatch)


import { configureStore } from '@reduxjs/toolkit'
import  loadingDisplaySlice  from './slices/loadingDisplay.slice'
import productsSlice from './slices/products.slice'

export default configureStore({
  reducer: {
    loadingDisplay: loadingDisplaySlice,
    products: productsSlice,
	}
})
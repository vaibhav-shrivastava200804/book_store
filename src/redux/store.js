import { configureStore } from '@reduxjs/toolkit'
import setSearchReducer from '../features/searchBooks/searchSlice'
export const store = configureStore({
  reducer: {
    setSearchBooks: setSearchReducer,
  },
})
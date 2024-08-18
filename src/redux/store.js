import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import favouriteReducer from './favourite/favouriteSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    favourite: favouriteReducer,
  },
})
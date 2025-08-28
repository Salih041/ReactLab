import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import noteReducer from './noteSlice'

export const store = configureStore({
  reducer: {
    todos :todoReducer,
    notes : noteReducer
  },
})
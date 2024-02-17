import { configureStore } from '@reduxjs/toolkit'
import { data } from './reducer'

export const store = configureStore({
  reducer: {
    data: data.reducer,
  },
})

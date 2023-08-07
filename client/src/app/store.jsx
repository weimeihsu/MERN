import { configureStore } from '@reduxjs/toolkit'
import  navBarListSlice  from '../features/record/recordSlide'

export const store = configureStore({
  reducer: {
    navBarLisState: navBarListSlice,
  },
})
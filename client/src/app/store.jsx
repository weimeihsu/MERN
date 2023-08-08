import { configureStore } from '@reduxjs/toolkit'
import  navListSlice  from '../features/list/navListSlide'

export const store = configureStore({
  reducer: {
    navLisState: navListSlice,
  },
})
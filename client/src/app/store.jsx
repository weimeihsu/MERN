import { configureStore } from '@reduxjs/toolkit'
import  navListSlice  from '../features/list/navListSlice'
import recordSlice from '../features/recordCRUD/recordSlice'

export const store = configureStore({
  reducer: {
    navLisState: navListSlice,
    recordsState: recordSlice
  },
})
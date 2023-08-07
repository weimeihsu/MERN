import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    navBarList:[
        {id:1, path:'/', name:'homepage'},
        {id:2, path:'/recordform', name:'record form'}
    ]
}

export const navBarListSlice = createSlice({
    name:'navbar',
    initialState,
    reducers:{

    }
})

export const selectNavbarList = state => state.navBarLisState.navBarList
export default navBarListSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    navList:[
        {id:1, path:'/', name:'homepage'},
        {id:2, path:'/recordform', name:'record form'}
    ],
    settingList:[
        {path:'/'}
    ]
}

export const navListSlice = createSlice({
    name:'navlist',
    initialState,
    reducers:{

    }
})

export const selectNavList = state => state.navLisState.navList
export default navListSlice.reducer
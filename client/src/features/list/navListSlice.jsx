import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    navList:[
        {id:1, path:'/', name:'Homepage'},
        {id:2, path:'/sitelist', name:'Site List'},
        {id:3, path:'/recordform', name:'List & Form'}
    ],
    accountList:[
        {path:'/account', name:'Account'},
        {path:'/lougout', name:'Logout'},
    ],
    siteList:[
        {id:'siteID123', name: 'example123.com'}, 
        {id:'siteID456', name: 'example456.com'}
    ]
}

export const navListSlice = createSlice({
    name:'navlist',
    initialState,
    reducers:{
    }
})

// export const selectNavList = state => state.navLisState.navList
// export const selectAccountList = state => state.navLisState.accountList
export default navListSlice.reducer
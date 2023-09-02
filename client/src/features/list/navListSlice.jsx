import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    accountLevelMenu:[
        {id:1, path:'/', name:'Homepage'},
        {id:2, path:'/sitelist', name:'Site List'},
        {id:3, path:'/recordform', name:'List & Form'}
    ],
    siteLevelMenu:[
        {id:1, path:'/dns', name:'DNS'},
        {id:2, path:'/domainlist', name:'Domain List'},
        {id:3, path:'/cdn-mgm', name:'CDN Management'}
    ],
    accountList:[
        {path:'/account', name:'Account'},
        {path:'/lougout', name:'Logout'},
    ],
    siteList:[
        {id:'site123', name: 'example123.com'}, 
        {id:'site456', name: 'example456.com'}
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
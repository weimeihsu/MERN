import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mainMenu:[
        {id:1, path:'/', name:'Homepage'},
        {id:2, path:'/sitelist', name:'Site List'},
        {id:3, path:'/recordform', name:'List & Form'}
    ],
    siteLevelMenu:[
        {id:1, path:'dns', name:'DNS'},
        {id:2, path:'domainlist', name:'Domain List'},
        {id:3, path:'cdn', name:'CDN Management'}
    ],
    selectedMenuID:null,
    accountList:[
        {path:'/account', name:'Account'},
        {path:'/lougout', name:'Logout'},
    ],
    selectedSiteObj: null,
    siteList:[
        {id:'site123', name: 'example123.com'}, 
        {id:'site456', name: 'example456.com'}
    ]
}

export const navListSlice = createSlice({
    name:'navlist',
    initialState,
    reducers:{
        getSiteObj: (state, action)=>{
            const { selectedSiteObj } = action.payload
            state.selectedSiteObj = selectedSiteObj
        },
        clearSiteObj: (state, action)=>{
            state.selectedSiteObj = null
            // state.selectedMenuID = state.mainMenu.id[1]
            // navigate to site list page
        },
        handleSelectedMenuID: (state, action)=>{
            const { theMenuID } = action.payload
            state.selectedMenuID = theMenuID
        }
    }
})

export const { getSiteObj,clearSiteObj } = navListSlice.actions
export default navListSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mainMenu:[
        {id:1, path:'/', name:'Homepage'},
        {id:2, path:'/sitelist', name:'Site List'},
        {id:3, path:'/recordform', name:'List & Form'}
    ],
    selectedMainMenuID: 1,
    siteLevelMenu:[
        {id:1, path:'dns', name:'DNS'},
        {id:2, path:'domainlist', name:'Domain List'},
        {id:3, path:'cdn', name:'CDN Management'}
    ],
    accountList:[
        {path:'/account', name:'Account'},
        {path:'/lougout', name:'Logout'},
    ],
    siteList:[
        {id:'site123', 
         name:'example123.com',
         domains:[{id:'1', name:'domainanme.com'},
                 {id:'2', name:'domainanme2.com'},
        ]}, 
        {id:'site456', 
        name: 'example456.com',
        domains:[{id:'1', name:'domainanme.com'},
                 {id:'2', name:'domainanme2.com'},
        ]}
    ],
    selectedSiteObj: null,
}

export const navListSlice = createSlice({
    name:'navlist',
    initialState,
    reducers:{
        getSiteObj: (state, action)=>{
            const { selectedSiteObj } = action.payload
            state.selectedSiteObj = selectedSiteObj
        },
        backToMain: (state, action)=>{
            state.selectedSiteObj = null
            state.selectedMainMenuID = state.mainMenu[1].id
            // navigate to site list page
        }
    }
})

export const { getSiteObj, backToMain } = navListSlice.actions
export default navListSlice.reducer
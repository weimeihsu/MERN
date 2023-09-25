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
        {id:2, path:'cdn', name:'CDN Management'}
    ],
    accountList:[
        {path:'/account', name:'Account'},
        {path:'/lougout', name:'Logout'},
    ],
    siteList:[
        {id:'site123', 
         name:'example.com',
         domains:[{id:'1', name:'domain.example.com'},
                 {id:'2', name:'cname.example.com'},
        ]}, 
        {id:'site456', 
        name: 'travel.com',
        domains:[{id:'3', name:'domain.travel.com'},
                 {id:'4', name:'cname.travel.com'},
        ]}
    ],
    selectedSiteID: null,
}

export const navListSlice = createSlice({
    name:'navlist',
    initialState,
    reducers:{
        getselectedSiteID: (state, action)=>{
            const { selectedSiteID } = action.payload
            state.selectedSiteID = selectedSiteID
        },
        backToMain: (state, action)=>{
            state.selectedSiteID = null
            state.selectedMainMenuID = state.mainMenu[1].id
            // navigate to site list page
        },
        getDomainArray: (state, action)=>{
            const { newArray } = state.siteList.domains
            state.rows.push(newArray)
        }
    }
})

export const { getselectedSiteID, backToMain } = navListSlice.actions
export default navListSlice.reducer

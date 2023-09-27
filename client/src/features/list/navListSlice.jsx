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
        {path:'/lougout', name:'Logout'}
    ],
    siteList:[
        {id:'site123', name:'example.com'}, 
        {id:'site456', name:'travel.com'}
    ],
    domainList:[
        {id:'1', sitename:'example.com', name:'domain.example.com'},
        {id:'2', sitename:'example.com', name:'cname.example.com'},
        {id:'3', sitename:'travel.com', name:'domain.travel.com'},
        {id:'4', sitename:'travel.com', name:'cname.travel.com'}
    ],
    filteredDomainlist:[],
    selectedSiteName: null,
    selectedSiteID: null
}

export const navListSlice = createSlice({
    name:'navlist',
    initialState,
    reducers:{
        getselectedSite: (state, action)=>{
            const { selectedSiteName, selectedSiteID } = action.payload
            state.selectedSiteName = selectedSiteName
            state.selectedSiteID = selectedSiteID
            
        },
        filter: (state, action) => {
            const { selectedSiteName } = action.payload
            console.log(selectedSiteName)
            state.filteredDomainlist = state.domainList.filter(domain => domain.sitename === selectedSiteName)
            // console.log(state.filteredDomainlist)
            // state.filteredDomainlist.push(list)
        },
        backToMain: (state, action)=>{
            state.selectedSiteID = null
            // state.selectedMainMenuID = state.mainMenu[1].id
            // navigate to site list page
        },
        getDomainArray: (state, action)=>{
            const { newArray } = state.siteList.domains
            state.rows.push(newArray)
        }
    }
})

export const { getselectedSite, backToMain, filter } = navListSlice.actions
export default navListSlice.reducer

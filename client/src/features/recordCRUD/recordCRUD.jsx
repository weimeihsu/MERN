import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    records:[{title:'Snow White', category:'Cartoon',id:0},
           {title:'The Secret Garden', category:'Comedy',id:1},
           {title:'Lion King', category:'Drama',id:2},
           {title:'Little Mermaid', category:'Thriller',id:3},
           {title:'Spider man', category:'Action',id:4},
           {title:'What Happened to Wed', category:'Action',id:5}],
  } 

export const recordsSlice = createSlice({
    name:'records',
    initialState,
    reducers:{
        addRecord:(state, action)=>{
            const {title, category} = action.payload
        },

    }
})

// Action creators are generated for each case reducer function
export const { addRecord } = recordsSlice.actions
export const selectAllRecords = state => state.recordsState.records
export default recordsSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    records:[],
    status:'idle', //'idle' | 'loading' | 'succeded' | 'failed'
    error:null
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
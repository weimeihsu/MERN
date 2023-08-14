import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const FETCH_URL = '/api/records'

const initialState = {
    records:[],
    status:'idle', //'idle' | 'loading' | 'succeded' | 'failed'
    error:null
  } 

// export const fetchRecords = createAsyncThunk('records/fetchRecords', ()=>{
//     return fetch(FETCH_URL).then(res=>res.json()).catch(err=>err.message)
// }) 

export const postRecords = createAsyncThunk('records/postRecords', async(data, FETCH_URL) =>{
    const config = {
        method: 'post',
        url: '',
        headers: {
            'Content-Type': ''
        },
        data: data
    }

    const response = await axios(config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            console.log(error);
            });
        return response.data
})

export const fetchRecords = createAsyncThunk('records/fetchRecords', async()=>{
    try{
        const res = await axios.get(FETCH_URL)
        return res.data // or [...res.data]
    }catch(err){
        return err.message
    }
})
export const recordsSlice = createSlice({
    name:'records',
    initialState,
    reducers:{
        addRecord:(state, action)=>{
            const {title, category} = action.payload
        },

    },
    extraReducers(builder) {
        builder
        .addCase(fetchRecords.pending, (state, action)=>{
            state.status='loading'
        })
        .addCase(fetchRecords.fulfilled, (state, action)=>{
            console.log(action)
            state.status='succeeded'
            state.records=action.payload
        })
        .addCase(fetchRecords.rejected, (state)=>{
            state.status='failed'
            state.error='something went wrong'
        })
    }
})

// Action creators are generated for each case reducer function
export const { addRecord } = recordsSlice.actions
// export const { selectAllRecords } = state => state.recordsState.records
// export const { getFetchStatus } = state => state.recordsState.status
// export const { getFetchError } = state => state.recordsState.error
export default recordsSlice.reducer
import { useDispatch } from 'react-redux'
import { addRecord, updateRecord } from '../features/recordCRUD/recordSlice'

export const saveRecord = (record) => {
    record.id ? updateRecord(record) : createRecord(record)
}

export const createRecord = async (record) => {
        const dispatch = useDispatch()
        const res = await fetch('/api/records', {
            method: 'POST',
            body: JSON.stringify(record),
            headers: {
                'Content-Type':'application/json'
            }
        })
        
        const newRecord = await res.json()
        dispatch(addRecord({newRecord}))     
}

export const updateRecord = async (record) => {
       
        const res = await fetch(`/api/records/${record.id}`, {
            method: 'PUT',
            body: JSON.stringify(record),
            headers: {
                'Content-Type':'application/json'
            }
        })
        
        const newRecord = await res.json()
        dispatch(updateRecord({newRecord}))    
}

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRecord } from '../features/recordCRUD/recordSlice'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const RecordForm = ({recordID, recordTitle, recordCategory, formTitle, btnText}) => {
    const dispatch = useDispatch()
    const {categories} = useSelector(store => store.recordSlice)
    const [createMode, setCreateMode] = useState(true)
    const handleMode = () =>{
        setCreateMode(current => !current)
    }
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [error, setError] = useState(null)
    const changeTitle = (e) => {
        setTitle(e.target.value);
    }
    const changeCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const signleRecord = {title, category}
       
        const res = await fetch('/api/records', {
            method: 'POST',
            body: JSON.stringify(signleRecord),
            headers: {
                'Content-Type':'application/json'
            }
        })
        setCategory('')
        setTitle('')
        const newRecord = await res.json()
        if(!res.ok){
            setError(json.error)
        }
        if(res.ok){
            dispatch(addRecord({newRecord}))
        }               
    }

    return ( 
        <>
        <h1>{formTitle}</h1>
        <form onSubmit={handleSubmit}>
            <Button onClick={handleMode}>{recordID}</Button>
            <p>{recordTitle}</p>
            <p>{recordCategory}</p>
                <TextField id="outlined-basic" label="Movie name" variant="outlined" size="small" sx={{mb:2}} fullWidth required onChange={changeTitle} value={createMode ? title : recordTitle}/>
                    <FormControl fullWidth size="small" sx={{mb:2}}>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={changeCategory}
                        required
                        >
                            {categories.map((categoryItem, idx)=>(
                                <MenuItem key={idx} value={categoryItem}>{categoryItem}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                <Button variant="contained" type='submit'>{btnText}</Button>
                {error && <div>{error}</div>}
        </form>
        </>
     );
}

RecordForm.defaultProps = {
    formTitle: 'Create Record',
    btnText:'Create',
}

export default RecordForm;
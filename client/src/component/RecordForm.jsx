import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRecord } from '../features/recordCRUD/recordSlice'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const RecordForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    
    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const changeCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(title && category){
            dispatch(addRecord({
                title, category
            }))
            setTitle('')
            setCategory('')
        }  
    }
    return ( 
        <Box component="form" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Movie name" variant="outlined" size="small" sx={{mb:2}} fullWidth required onChange={changeTitle} value={title}/>
                    <FormControl fullWidth size="small" sx={{mb:2}}>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={changeCategory}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                <Button variant="contained">Add</Button>
        </Box>
     );
}

export default RecordForm;
import { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const RecordForm = () => {

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
        console.log('submit')
        const signleRecord = {title, category}
       
        const res = await fetch('/api/records', {
            method: 'POST',
            body: JSON.stringify(signleRecord),
            headers: {
                'Content-Type':'application/json'
            }
        })
        const json = await res.json()
        if(!res.ok){
            setError(json.error)
        }
        if(res.ok){
            setTitle('')
            setCategory('')
            setError(null)
        }         
            
    }
    return ( 
        <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Movie name" variant="outlined" size="small" sx={{mb:2}} fullWidth required onChange={changeTitle} value={title}/>
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
                        <MenuItem value={'Action'}>Action</MenuItem>
                        <MenuItem value={'Drama'}>Drama</MenuItem>
                        <MenuItem value={'Fiction'}>Fiction</MenuItem>
                        <MenuItem value={'Fantasy'}>Fantasy</MenuItem>
                        </Select>
                    </FormControl>
                <Button variant="contained" type='submit'>Add</Button>
                {error && <div>{error}</div>}
        </form>
     );
}

export default RecordForm;
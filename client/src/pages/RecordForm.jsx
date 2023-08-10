import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'

import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Typography from '@mui/material/Typography'

const RecordnForm = () => {
    const [records, setRecords] = useState(null)
    const [title, setTitle] = useState()
    const [category, setCategory] = useState('')
    
    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const changeCategory = (e) => {
        setCategory(e.target.value);
    }
    useEffect(()=>{
        const fetchRecords = async() =>{
            const res = await fetch('/api/records')
            const data = await res.json()
            setRecords(data)
        }
        fetchRecords()
    },[]) 
    
    return ( 
    <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
            <Grid item xs={8}>
            <h1>Records</h1>
            {records && records.map(recordItem=>(
            <Card key={recordItem._id} variant="outlined" sx={{mb:2}}>
                <CardContent>
                    <Typography variant="h5">
                        {recordItem.title}
                    </Typography>
                    <Typography variant="body2">
                        {recordItem.category}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <DeleteIcon/>
                    </IconButton>
                </CardActions>
            </Card>
             ))} 
            </Grid>
            <Grid item xs={4}>
            <h1>Form</h1>
                <Box component="form">
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
            </Grid>
            </Grid>
    </Box>
     )
}
 
export default RecordnForm;
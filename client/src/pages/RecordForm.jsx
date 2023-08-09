import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

const RecordnForm = () => {
    const [records, setRecords] = useState(null)
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
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
                <List>
                {records && records.map(recordItem=>(
                    <ListItem key={recordItem._id} divider>
                        <ListItemText  primary={recordItem.title} secondary={recordItem.category}>
                        </ListItemText>
                    </ListItem>
                ))}   
                </List>
            </Grid>
            <Grid item xs={4}>
            <h1>Form</h1>
                <Box component="form">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" sx={{mb:2}} fullWidth/>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Category"
                        onChange={handleChange}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            </Grid>
    </Box>
     );
}
 
export default RecordnForm;
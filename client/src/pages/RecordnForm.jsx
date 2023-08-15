import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecords } from '../features/recordCRUD/recordSlice'
import Grid from '@mui/material/Grid'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Typography from '@mui/material/Typography'

import RecordForm from '../component/recordForm'


const RecordnForm = () => {
    const dispatch = useDispatch()
    const {records, status, error} = useSelector(store => store.recordSlice)
    
    useEffect(()=>{
        dispatch(fetchRecords())
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
                    <Typography variant="body2">
                        {recordItem.createdAt}
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
                <RecordForm/>
            </Grid>
            </Grid>
    </Box>
     )
}
 
export default RecordnForm;
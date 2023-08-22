import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import RecordForm from '../component/recordForm'
import Records from '../component/Records'

const RecordnForm = () => {

    return ( 
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
            <Grid item xs={8}>
                <h1>Records</h1>
                <Records/>
            </Grid>
            <Grid item xs={4}>
                <RecordForm/>
            </Grid>
        </Grid>
    </Box>
     )
}
 
export default RecordnForm;
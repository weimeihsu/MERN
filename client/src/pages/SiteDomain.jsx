import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'

import DomainTable from '../component/DomainTable'
import SiteList from '../component/SiteList'

const SiteDomain = () => {
    return ( 
        <Grid container fluid>
            <Grid item sx={{ minWidth: 275 }}><SiteList/></Grid>
            <Grid item sx={{ minWidth: 275 }}><DomainTable/></Grid>
        </Grid>
     );
}
 
export default SiteDomain;
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Collapse from '@mui/material/Collapse'

import DomainTable from '../component/DomainTable'
import SiteList from '../component/SiteList'

const SiteDomain = () => {
    const [isOpen, setIsOpen] = useState(true)
    const toggleSitePanel = () =>{
        setIsOpen(isOpen => !isOpen)
    }
    return ( 
        <Grid container fluid sx={{height: '100vh'}}>
            
            <Grid item xs={4} sx={{ backgroundColor: 'primary.dark', padding: '16px' }} ><Collapse in={isOpen} orientation="horizontal"><SiteList/></Collapse></Grid>
           
            
            
            <Grid item xs={8} sx={{ padding: '16px' }} ><DomainTable toggleSitePanel={toggleSitePanel}/></Grid>
        </Grid>
     );
}
 
export default SiteDomain;
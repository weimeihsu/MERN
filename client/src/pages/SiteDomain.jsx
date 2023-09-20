import { useState } from 'react'
import Collapse from '@mui/material/Collapse'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import DomainTable from '../component/DomainTable'
import SiteList from '../component/SiteList'

const SiteDomain = () => {
    const [isOpen, setIsOpen] = useState(true)
    const toggleSitePanel = () =>{
        setIsOpen(isOpen => !isOpen)
    }
    return ( 
        <Container sx={{display: 'flex', flexDirection: 'row'}} disableGutters>
            <Collapse in={isOpen} orientation="horizontal">
            <Box sx={{ backgroundColor: 'primary.light', p:2 }} height="100vh"><SiteList/></Box></Collapse>
           
            <Box sx={{ p:2, flexGrow: 1 }} ><DomainTable toggleSitePanel={toggleSitePanel}/></Box>
        </Container>
     );
}
 
export default SiteDomain;
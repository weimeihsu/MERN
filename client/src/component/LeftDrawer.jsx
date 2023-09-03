import { useSelector } from 'react-redux'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import AcctLevelMenu from './AcctLevelMenu'
import SiteLevelMenu from './SiteLevelMenu'


const LeftDrawer = ({toggleDrawer, drawerWidth, open}) => {
  const { siteID } = useSelector(store=>store.navListSlice)
  const theSiteName = siteID ? siteID : undefined
    return ( 
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <Typography>{siteID}</Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          {siteID ? <SiteLevelMenu /> :<AcctLevelMenu />}
          
          
        </Drawer>
     );
}
 
export default LeftDrawer;

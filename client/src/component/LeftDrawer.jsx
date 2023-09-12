import { useSelector } from 'react-redux'
import Drawer from '@mui/material/Drawer'

import MainMenu from './MainMenu'
import SiteLevelMenu from './SiteLevelMenu'


const LeftDrawer = ({drawerWidth, open}) => {
  const { selectedSiteObj } = useSelector(store=>store.navListSlice)
  // const theSiteName = siteID ? siteID : undefined

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
          {selectedSiteObj ? <SiteLevelMenu selectedSiteObj={selectedSiteObj}/> :<MainMenu />}
        </Drawer>
     );
}
 
export default LeftDrawer;
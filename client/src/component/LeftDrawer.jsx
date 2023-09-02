import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'


const LeftDrawer = ({accountLevelMenu, siteLevelMenu, toggleDrawer, drawerWidth, open}) => {
  // const hasID = siteID ? siteID : undefined
  const [ selectedID, setSelectedID ] = useState(null)
  const handlesSelected = (id) =>{
    setSelectedID(id)
  }
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
            <Typography>site.com</Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            {accountLevelMenu.map(navitem => (
                <ListItem key={navitem.id} disablePadding>
                <ListItemButton selected={selectedID === navitem.id} onClick={()=>handlesSelected(navitem.id)}>
                  <NavLink to={navitem.path}>
                    <ListItemText primary={navitem.name} />
                  </NavLink>  
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List>
            {siteLevelMenu.map((navitem, idx) => (
                <ListItem key={idx} disablePadding>
                <ListItemButton>
                  <NavLink to={navitem.path}>
                    <ListItemText primary={navitem.name} />
                  </NavLink>  
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
     );
}
 
export default LeftDrawer;

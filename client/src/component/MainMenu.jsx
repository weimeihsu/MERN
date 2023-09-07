import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const MainMenu = () => {
    const { mainMenu } = useSelector(store=>store.navListSlice)
    const [ selectedID, setSelectedID ] = useState(1)
    const handlesSelected = (id) =>{
    setSelectedID(id)
    }
    return ( 
      <>
        <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
          </Toolbar>
          <Divider />

          <List>
            {mainMenu.map(navitem => (
                <ListItem key={navitem.id} disablePadding>
                <ListItemButton selected={selectedID === navitem.id} onClick={()=>handlesSelected(navitem.id)}>
                  <NavLink to={navitem.path}>
                    <ListItemText primary={navitem.name} />
                  </NavLink>  
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </>  
     );
}
 
export default MainMenu;
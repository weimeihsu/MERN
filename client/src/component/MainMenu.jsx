import { useSelector } from 'react-redux'
import { useState } from 'react'

import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const MainMenu = () => {
    const { mainMenu, selectedMainMenuID } = useSelector(store=>store.navListSlice)
    const [ selectedID, setSelectedID ] = useState(selectedMainMenuID)
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
                <ListItemButton selected={selectedID === navitem.id} onClick={()=>handlesSelected(navitem.id)} component="a" href={navitem.path}>
                    <ListItemText primary={navitem.name} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </>  
     );
}
 
export default MainMenu;
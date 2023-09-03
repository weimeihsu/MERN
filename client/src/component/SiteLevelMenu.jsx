import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const SiteLevelMenu = () => {
    const { siteLevelMenu } = useSelector(store=>store.navListSlice)
    const [ selectedID, setSelectedID ] = useState(null)
    const handlesSelected = (id) =>{
    setSelectedID(id)
    }
    return ( 
        <List>
            {siteLevelMenu.map(navitem => (
                <ListItem key={navitem.id} disablePadding>
                <ListItemButton selected={selectedID === navitem.id} onClick={()=>handlesSelected(navitem.id)}>
                  <NavLink to={navitem.path}>
                    <ListItemText primary={navitem.name} />
                  </NavLink>  
                </ListItemButton>
              </ListItem>
            ))}
          </List>
     );
}
 
export default SiteLevelMenu;
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LeftDrawer from '../component/LeftDrawer'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
const SiteList = () => {
    const {siteList} = useSelector(store=>store.navListSlice)
    return ( 
        <>
        <h1>Sitelist</h1>
        <List>
            {siteList.map(navitem => (
                <ListItem key={navitem.id} disablePadding>
                <ListItemButton>
                  <Link to={navitem.id} >
                    <ListItemText primary={navitem.name} />
                  </Link>  
                </ListItemButton>
              </ListItem>
            ))}
        </List>
        
        </>
     );
}
 
export default SiteList;
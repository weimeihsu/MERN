import { useSelector, useDispatch } from 'react-redux'
import { getSiteID } from '../features/list/navListSlice'
import { Link } from 'react-router-dom'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
const SiteList = () => {
  const dispatch = useDispatch()
  const {siteList} = useSelector(store=>store.navListSlice)
  const handleGetSiteID = (theSiteID) =>{
    dispatch(getSiteID({theSiteID}))
  }
    return ( 
        <>
        <h1>Sitelist</h1>
        <List>
            {siteList.map(navitem => (
                <ListItem key={navitem.id} disablePadding>
                <ListItemButton onClick={()=>handleGetSiteID(navitem.id)}>
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
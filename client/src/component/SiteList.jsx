import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { getSiteObj } from '../features/list/navListSlice'
import { Link } from 'react-router-dom'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const SiteList = () => {
  const {siteList} = useSelector(store=>store.navListSlice)
  const [selectedID, setSelectedID] = useState()
  const dispatch = useDispatch()
  const handleSelectedSite = (id) =>{
    setSelectedID(id)
  }
    return ( 
        <>
        <h1>Sitelist</h1>
        <List>
            {siteList.map(navitem => (
                <ListItem key={navitem.id} disablePadding>
                <ListItemButton selected={selectedID === navitem.id} onClick={()=>handleSelectedSite(navitem.id)} 
                sx={{
                    '&.Mui-selected': {
                      backgroundColor: 'primary.main',
                      borderRadius:1
                    },
                    '&.Mui-focusVisible': {
                      backgroundColor: 'primary.main',
                      borderRadius:1
                    },
                    ':hover': {
                      backgroundColor: 'primary.main',
                      borderRadius:1
                    }
                 }}>
                  {/* <Link to={`${navitem.id}/dns`} > */}
                    <ListItemText primary={navitem.name} />
                  {/* </Link>   */}
                </ListItemButton>
              </ListItem>
            ))}
        </List>
        </>
     );
}
 
export default SiteList;
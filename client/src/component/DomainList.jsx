import { useSelector } from 'react-redux'

import DeleteIcon from '@mui/icons-material/Delete'
import Chip from '@mui/material/Chip'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

const DomainList = ({toggleSitePanel}) => {
    const { siteList } = useSelector(store=>store.navListSlice)

    return ( 
        <>
        <IconButton aria-label="toggle" onClick={toggleSitePanel}>
         <MenuIcon />
        </IconButton>
        <h1>Domain Table</h1>
        
        {siteList && siteList.map((mainItem,idx)=>(
          <List key={idx} sx={{p:0}}>
            {mainItem.domains.map(recordItem => (
              <ListItem key={recordItem.id}>
                <ListItemButton component="a" href="#" sx={{border: '1px solid lightBlue',borderRadius: 1 }}>
                  <ListItemText primary={recordItem.name} />
                  <Chip label={mainItem.name} size="small" sx={{m:1}}/>
                  <IconButton size="small" aria-label="delete" onClick={() => handleRemove(recordItem.id)}>
                    <DeleteIcon fontSize="inherit"/>
                  </IconButton>
                </ListItemButton>
              </ListItem>
            ))}
          </List>  
        ))} 
        </>
     );
}
 
export default DomainList;
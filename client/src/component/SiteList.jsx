import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../theme'
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
      <ThemeProvider theme={theme}>
        <h1>Sitelist</h1>
        <List>
            {siteList.map(navitem => (
                <ListItem key={navitem.id} disablePadding>
                <ListItemButton selected={selectedID === navitem.id} onClick={()=>handleSelectedSite(navitem.id)} 
                >
                  {/* <Link to={`${navitem.id}/dns`} > */}
                    <ListItemText primary={navitem.name} />
                  {/* </Link>   */}
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </ThemeProvider>
     );
}
 
export default SiteList;
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { getselectedSite, filter } from '../features/list/navListSlice'
import { theme } from '../theme'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'


const SiteList = () => {
  const {siteList} = useSelector(store=>store.navListSlice)
  const [selected, setSelected] = useState()
  const dispatch = useDispatch()
  const handleSelectedSite = (id, name) =>{
    setSelected(name)
    dispatch(getselectedSite(
      { selectedSiteName:name,
        selectedSiteID:id }))
    dispatch(filter({selectedSiteName:name}))
  }
    return ( 
      <ThemeProvider theme={theme}>
        <h1>Sitelist</h1>
        <List>
            {siteList.map(navitem => (
                <ListItem key={navitem.id} disablePadding>
                <ListItemButton selected={selected === navitem.name} onClick={()=>handleSelectedSite(navitem.id, navitem.name)} 
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
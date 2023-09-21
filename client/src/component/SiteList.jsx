import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { styled, ThemeProvider } from '@mui/material/styles'
import { theme } from '../theme'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const StyledList = styled(List)(({ theme })=>(
  {
    // selected and (selected + hover) states
    '&& .Mui-selected, && .Mui-selected:hover': {
      backgroundColor: theme.palette.primary.main,
      borderRadius:theme.shape.borderRadius * 1,
      '&, & .MuiListItemIcon-root': {
        color: 'white',
      },
    },
    // hover states
    '& .MuiListItemButton-root:hover': {
      borderRadius:theme.shape.borderRadius * 1,
      '&, & .MuiListItemIcon-root': {
        color: 'white',
      },
    },
  }
));

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
        <StyledList>
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
        </StyledList>
      </ThemeProvider>
     );
}
 
export default SiteList;
import Routers from './routers/Routers'
import { useState } from 'react'

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { styled } from '@mui/material/styles'

import NavBar from './component/NavBar'
import LeftDrawer from './component/LeftDrawer'

const drawerWidth = 240;

const Main = styled('main', { 
  shouldForwardProp: (prop) => prop !== 'open' })
  (({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

function App() {

  const [siteID, setSiteID] = useState(null)
  const getSiteID = (id) => {
    setSiteID(id)
  }
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar toggleDrawer={toggleDrawer} open={open}/>
      <LeftDrawer drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} open={open}/>
        <Main open={open}>
            <Toolbar />
            <Routers/>
        </Main>
    </Box>
  )
}

export default App

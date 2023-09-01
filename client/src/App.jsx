import Routers from './routers/Routers'
import { useSelector } from 'react-redux'
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
  const {navList, accountList} = useSelector(store=>store.navListSlice)
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar accountList={accountList} toggleDrawer={toggleDrawer} open={open}/>
      <LeftDrawer navList={navList} drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} open={open}/>
        <Main open={open}>
            <Toolbar />
            <Routers/>
        </Main>
      </Box>
  )
}

export default App

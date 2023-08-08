
import Routers from './routers/Routers'

import ResponsiveAppBar from './component/ResponsiveAppBar'
import { Box, Toolbar } from '@mui/material'
function App() {
  
  return (
    <>
      <ResponsiveAppBar/>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar/>
        <Routers/>
      </Box>
    </>
  )
}

export default App

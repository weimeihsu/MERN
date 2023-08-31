import Routers from './routers/Routers'

import LeftDrawer from './component/LeftDrawer'
import { Box } from '@mui/material'
function App() {
  
  return (
    <>
      
      <Box component="main" sx={{ p: 3 }}>
        <LeftDrawer/>
        <Routers/>
      </Box>
    </>
  )
}

export default App

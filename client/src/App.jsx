import Routers from './routers/Routers'
import { RouterProvider } from 'react-router-dom'


// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })
//   (({ theme, open }) => ({
//   flexGrow: 1,
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: `-${drawerWidth}px`,
//   ...(open && {
//       transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   }),
// }));

const App = () => {
  return (
      <RouterProvider router={Routers}/>
  )
}

export default App


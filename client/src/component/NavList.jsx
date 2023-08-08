import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectNavList } from '../features/list/navListSlide'


const NavList = () => {
  const navList = useSelector(selectNavList)

    return ( 
      <>
        <nav className="navBar">
        {navList.map((navitem, idx)=>( 
          <NavLink className="navItem" to={navitem.path} key={idx}>
            {navitem.name}
          </NavLink>
        ))}
        </nav>  
        {/* <main><Outlet/></main> */}
      </>
    );
}
 
export default NavList;
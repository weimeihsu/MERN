import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectNavbarList } from '../features/record/recordSlide'


const NavBar = () => {
  const navBarList = useSelector(selectNavbarList)

    return ( 
      <>
        <nav className="navBar">
        {navBarList.map((navitem, idx)=>( 
          <NavLink className="navItem" to={navitem.path} key={idx}>
            {navitem.name}
          </NavLink>
        ))}
        </nav>  
        {/* <main><Outlet/></main> */}
      </>
    );
}
 
export default NavBar;
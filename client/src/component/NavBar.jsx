import { NavLink } from "react-router-dom";
const NavBar = () => {
    return ( 
        <nav className="navBar">
          {navList.map((navitem, idx)=>( 
            <NavLink className="navItem" to={navitem.path} key={idx}>
               {navitem.title}
            </NavLink>
        ))}
        </nav>  
     );
}
 
export default NavBar;
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const SiteOutlet = () => {
    const { siteID } = useParams()
    return ( 
        <>
        <h1>{siteID}</h1>
        </>
        
     );
}
 
export default SiteOutlet;
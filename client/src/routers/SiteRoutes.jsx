import { Routes, Route } from "react-router-dom"

import DnsRecords from '../pages/siteLevel/DnsRecords'
import DomainList from '../pages/siteLevel/DomainList'
import CDNmgm from '../pages/siteLevel/CDNmgm'

const SiteRoutes = () => {
    return ( 
        <Routes>
            <Route path="dns" element={<DnsRecords/>}/>
            <Route path="domainlist" element={<DomainList/> } /> 
            <Route path="cdn" element={<CDNmgm/> } />  
        </Routes>
     );
}
 
export default SiteRoutes;
import { Route, Routes } from 'react-router-dom'
import RecordnForm from '../pages/RecordnForm'
import HomePage from '../pages/Homepage'
import SiteList from '../pages/SiteList'
import DnsRecords from '../pages/DnsRecords'
import DomainList from '../pages/siteLevel/DomainList'
import CDNsetting from '../pages/siteLevel/CdnSetting'

const Routers = () => {
    return ( 
        <Routes>
            <Route index element={<HomePage/> } />
            <Route path="recordform" element={<RecordnForm/> } />
            <Route path="sitelist" element={<SiteList/> } />
            <Route path="sitelist/:id" element={<DnsRecords/> } >
                <Route path="domainlist" element={<DomainList/>}/>
                <Route path="cdn-setting" element={<CDNsetting/>}/>
            </Route>
        </Routes>
     );
}
 
export default Routers;
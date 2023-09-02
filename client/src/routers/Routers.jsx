import { Routes, Route } from 'react-router-dom'
import RecordnForm from '../pages/RecordnForm'
import HomePage from '../pages/Homepage'
import SiteList from '../pages/SiteList'
import DnsRecords from '../pages/siteLevel/DnsRecords'
import DomainList from '../pages/siteLevel/DomainList'
import CDNsetting from '../pages/siteLevel/CdnSetting'
import SiteOutlet from '../pages/siteLevel/SiteOutlet'

const Routers = () =>{
    return (
    <Routes>
        <Route index element={<HomePage/> } />
        <Route path="recordform" element={<RecordnForm/> } />
        <Route path="sitelist" element={<SiteList/>} />
        <Route path="sitelist/:siteID" element={<SiteOutlet/> } />
    </Routes>
    )
}
export default Routers

{/* 
<Route path="domainlist" element={<DomainList/>}/>
<Route path="cdn-setting" element={<CDNsetting/>}/>   */}
import { Routes, Route } from 'react-router-dom'
import RecordnForm from '../pages/RecordnForm'
import HomePage from '../pages/Homepage'
import SiteDomain from '../pages/SiteDomain'
import SiteRoutes from './SiteRoutes'


const Routers = () => {
    return (
        <Routes>
            <Route index element={<HomePage/> } />
            <Route path="recordform" element={<RecordnForm/> }/>
            <Route path="sitelist" element={<SiteDomain/>}/>
            <Route path="sitelist/:siteID/*" element={<SiteRoutes/>}/>
        </Routes>
    )
}

export default Routers 


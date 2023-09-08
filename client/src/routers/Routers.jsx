import { Routes, Route } from 'react-router-dom'
import RecordnForm from '../pages/RecordnForm'
import HomePage from '../pages/Homepage'

import SiteRoutes from './SiteRoutes'

const Routers = () => {
    return (
        <Routes>
            <Route index element={<HomePage/> } />
            <Route path="recordform" element={<RecordnForm/> } />
            <Route path="sitelist/*" element={<SiteRoutes/>}/>
        </Routes>
    )
}

export default Routers 


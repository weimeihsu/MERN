import { Route, Routes } from 'react-router-dom'
import RecordnForm from '../pages/RecordnForm'
import HomePage from '../pages/Homepage';
const Routers = () => {
    return ( 
        <Routes>
            <Route index element={<HomePage/> } />
            <Route path="recordform" element={<RecordnForm/> } />
        </Routes>
     );
}
 
export default Routers;
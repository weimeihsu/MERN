import { Route, Routes } from 'react-router-dom'
import RecordForm from '../pages/RecordForm'
import HomePage from '../pages/Homepage';
const Routers = () => {
    return ( 
        <Routes>
            <Route index element={<HomePage/> } />
            <Route path="recordform" element={<RecordForm/> } />
        </Routes>
     );
}
 
export default Routers;
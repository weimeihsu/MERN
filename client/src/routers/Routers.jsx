import { Route, Routes } from 'react-router-dom'
import Workout from '../pages/Workout'
import HomePage from '../pages/Homepage';
const Routers = () => {
    return ( 
        <Routes>
            <Route index element={<HomePage/> } />
            <Route path="workout" element={<Workout/> } />
        </Routes>
     );
}
 
export default Routers;
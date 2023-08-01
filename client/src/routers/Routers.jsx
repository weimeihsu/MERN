import { Route, Routes } from 'react-router-dom'
import WorkoutForm from '../pages/WorkoutForm'
import HomePage from '../pages/Homepage';
const Routers = () => {
    return ( 
        <Routes>
            <Route index element={<HomePage/> } />
            <Route path="workout" element={<WorkoutForm/> } />
        </Routes>
     );
}
 
export default Routers;
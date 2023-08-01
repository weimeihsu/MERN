import { useState, useEffect } from 'react'
import './App.css'
import Routers from './routers/Routers'
import WorkoutForm from './pages/WorkoutForm'

function App() {
  const [backendData, setBackendData] = useState([{}])
  useEffect(()=>{
    fetch('http://localhost:5000/api').then(
      response => response.json()
    ).then(
      data => {setBackendData(data)}
    )
  }, [])
  return (
    <>
    {/* outlet will replace the routes */}
      <WorkoutForm/>
      <Routers/>
    </>
  )
}

export default App

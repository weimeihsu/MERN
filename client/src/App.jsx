import { useState, useEffect } from 'react'
import './App.css'
import Routers from './routers/Routers'

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
      <Routers/>
    </>
  )
}

export default App

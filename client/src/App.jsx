import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        {(typeof backendData.users === 'undefined') ? (
          <p>homepage</p>
        ):(backendData.users.map((user,i)=>(
          <p key={i}>{user}</p>
        )))}
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

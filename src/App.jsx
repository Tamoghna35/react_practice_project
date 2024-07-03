import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Welcome from './components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/">Sign Up</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/login' element={<LogIn />} />
            <Route path='/' element={<SignUp />} />
            <Route path='/welcome' element={<Welcome />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App

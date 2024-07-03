import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handleLogIn = (e) => {
    e.preventDefault();
    if (email, password) {
      const storedUser = JSON.parse(localStorage.getItem(email));
      if (storedUser && storedUser.password === password) {
        alert("Log in Successfully")
        navigate("/welcome")
      } else {
        alert("Invalid email or password")
      }
    } else {
      alert('Please enter email and password');
    }
  }
  return (
    <div>
      <h2>Log In Page</h2>
      <form onSubmit={handleLogIn}>
        <input
          type="email"
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">LogIn</button>
      </form>
    </div>
  )
}

export default LogIn
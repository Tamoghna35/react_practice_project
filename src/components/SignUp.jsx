import React, { useState } from 'react'

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignup = (e) => {
        e.preventDefault();
        if (email && password) {
            localStorage.setItem(email, JSON.stringify({ email, password }));
            alert("User Regisered Successfully")
            setEmail("")
            setPassword("")
        } else {
            alert('Please enter email and password');
        }

    }
    return (
        <div>
            <h2>Sign up Page</h2>
            <form onSubmit={handleSignup}>
                <input
                    type="email"
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Enter Email'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
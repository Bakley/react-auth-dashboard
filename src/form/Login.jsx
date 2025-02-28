import React, { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import '../form/Login.css'

const Login = () => {
    const [userName, setUsername] = useState("")
    const [password, setpassword] = useState("")

    const { login } = useContext(AuthContext)
    const navigate =  useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        if (username === "Barclay" && password === "password"){
            login()
            navigate('/dashboard')
        } else {
            alert("Invalid Credentials")
        }
    }

    return (
    <div className="login-container">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
    </div>
    )

}

export default Login
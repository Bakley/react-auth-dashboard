import React, { useContext } from "react";
import { AuthContext  } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../screens/Dashboard.css"

const Dashboard = () => {
    const { isAuth, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    if(!isAuth) {
        navigate("/login")
        return null
    }

    return(
    <div className="dashboard-container">
        <h2>Welcome to the Dashboard</h2>
        <button onClick={logout}>Logout</button>
      </div>
    )
}

export default Dashboard

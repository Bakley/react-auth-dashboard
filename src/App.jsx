import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Login from './form/Login'
import Dashboard from './screens/Dashboard'
import './App.css'

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<Login />} />

        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App

import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Mobiles from './pages/Mobiles'
import Fashion from './pages/Fashion'
import Kids from './pages/Kids'
import Login from './pages/Login'
import Pay from './pages/pay'
import Deals from './pages/deals'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './ProtectedRoute'

const App = () => {

  const [acceptLogin , setAcceptLogin] = useState(null)
  return (
    <div>
      <center>
        <h1>Welcome to My Route App </h1>

        <Navbar />

        <Routes>

          <Route path='/' element={<Homepage />} />
          <Route path='mobiles' element={<Mobiles />} />
          <Route path='fashion' element={<Fashion />} />
          <Route path='kids' element={<Kids />} />
         
          <Route path='login' element={<Login/>} />
          
          <Route path='dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />


        </Routes>

{/* 
        <Pay />

        <Deals/> */}
      </center>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const [count ,setCount] = useState(0)

    const navigateMe = useNavigate() ;

    const handleLogout = () =>{
        localStorage.removeItem('usr')
        navigateMe('/login')
    }

  return (
    <div>
      <h2>Welcome to Dashboard : {localStorage.getItem('usr').toUpperCase()}</h2>

      <h3>Count : {count}</h3>

      <button onClick={()=>setCount(count+1)}>Increase</button> <br /><br />

      <button onClick={handleLogout}>Logout</button> <br /><br />

    </div>
  )
}

export default Dashboard

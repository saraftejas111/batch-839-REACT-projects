import React from 'react'
import './App.css'
import ShowEmployees from './ShowEmployees'
import ShowStudents from './ShowStudents'



const App = () => {
  return (
    <div>
      <center>
        <h1>
          Welcome to ENV App
        </h1>


       <ShowEmployees/>
       <ShowStudents/>
      </center>
    </div>
  )
}

export default App

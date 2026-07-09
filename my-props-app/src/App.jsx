import React, { useState } from 'react'
import './App.css'
import Sum from './Sum';
import Diff from './Diff';
import Multiply from './Multiply';
import Division from './Division';
const App = () => {

  // let a = 5 ; 
  // let b = 3 ; 

  const [a , setA] = useState(0)
  const [b , setB] = useState(0)

  function multiplyOpt (){
    return a*b ; 
  }
  return (
    <div>
      <center>
        <h1>Welcome to my Props App</h1>

         a : <input type="text" value={a} onChange={(e)=>setA(Number(e.target.value))} /> <br /><br />
         b : <input type="text" value={b} onChange={(e)=>setB(Number(e.target.value))} /> <br /><br />
             
           
        <Sum x={a} y={b}/>

        <Diff p={a} q={b}/>

        <Multiply multi={multiplyOpt}/>

        <Division  />
      </center>
    </div>
  )
}

export default App

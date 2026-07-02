import { useState } from 'react'
import './App.css'
import Sum from './Sum'


function App() {

  let [name, setName] = useState('')

  const handleDefault = () => {

    setName('def user')
  }
  const handleChange = (e) => {

    console.log("from input = ", e.target.value)

    setName(e.target.value)
  }

  return (
    <>
      <center>

        <button onClick={handleDefault}>
          set default user
        </button>

        <h3>Enter User name </h3> <input type="text" onChange={handleChange} />



        <h1>Hello....{name}</h1>

        <Sum />
      </center>
    </>
  )
}

export default App

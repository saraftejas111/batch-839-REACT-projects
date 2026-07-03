import React, { useState } from 'react'
import './App.css'
import SetColor from './SetColor'


const App = () => {

  let [uname, setUname] = useState('')

  let [emp, setEmp] = useState({ empname: '', emprole: '', empsalary: '' })

  const handleClick = () => {
    console.log("from click me")
  }

  const handleMyname = (name) => {
    console.log("Hello...  ", name)
  }

  const handleUsername = (tag) => {

    console.log("tag attributes : ", tag.target)
    console.log("tag type : ", tag.target.type)
    console.log("tag name : ", tag.target.name)
    console.log("tag value : ", tag.target.value)

    setUname(tag.target.value)

    console.log("uname = ", uname)
  }

  // const handleName = (e) => {
  //   setEmp({ ...emp, empname: e.target.value })
  // }
  
  // const handleRole = (e) => {
    //   setEmp({ ...emp, emprole: e.target.value })
    // }
    
    // const handleSalary = (e) => {
      //   setEmp({ ...emp, empsalary: e.target.value })
      // }
      
        const handleInputs = (e) => {
          setEmp({...emp , [e.target.name] : e.target.value })
          
        }

  const handleSubmit = (e) => {

    e.preventDefault() ;   // prevent from reloading the page

    console.log("Emp Object = ", emp)

    setEmp({ empname: '', emprole: '', empsalary: '' })
  }
  return (
    <div>
      <center>

        <h1>Welcome to my Event App...</h1>

        <SetColor/>

        <button onClick={handleClick}>
          Click Me..
        </button>

        <button onClick={() => handleMyname("Tejas")}>
          Print My Name
        </button>

        <h3>
          UserName : <input type="text" name='uname' value={uname} onChange={handleUsername} /><br /><br />

        </h3>

        <button>Send</button> {"  "}

        <button onClick={() => setUname('')}>Clear</button>

        <h3>Add Employee Form</h3>

        <form onSubmit={handleSubmit}>
          Emp Name : <input type="text" name='empname' value={emp.empname} onChange={handleInputs} /><br /><br />
          Emp Role : <input type="text" name='emprole' value={emp.emprole} onChange={handleInputs} /><br /><br />
          Emp Salary : <input type="text" name='empsalary' value={emp.empsalary} onChange={(e)=> {setEmp({...emp, [e.target.name]:e.target.value})} } /><br /><br />

          <button type='submit'>
            Add Employee
          </button>
        </form>

        <br /><br />
      </center>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import './App.css'


const App = () => {

  let [allemployees, setAllemployees] = useState([])

  let [employee, setEmployee] = useState({ id: '', name: '', role: '', salary: '' })

  const handleChange = (e) => {

    let { name, value } = e.target;

    setEmployee({ ...employee, [name]: value })
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    setAllemployees([...allemployees, employee])

    setEmployee({ id: '', name: '', role: '', salary: '' })
  }

  const handleDelete = (id) => {

    console.log("deleted id : ", id)

    const newList = allemployees.filter((emp) => emp.id !== id)

    setAllemployees(newList);
  }

  return (
    <div>
      <center>
        <h1>Welcome to List App</h1>

        <h3>Add Employee Form</h3>

        <form onSubmit={handleSubmit}>
          enter id : <input type="text" name='id' value={employee.id} onChange={handleChange} /> <br /><br />
          enter name : <input type="text" name='name' value={employee.name} onChange={handleChange} /> <br /><br />
          enter role : <input type="text" name='role' value={employee.role} onChange={handleChange} /> <br /><br />
          enter salary : <input type="text" name='salary' value={employee.salary} onChange={handleChange} /> <br /><br />

          <button type='submit'>Add Employee</button>
        </form>

        <h3>All employees</h3>

        <table border='2'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>ROLE</th>
              <th>SALARY</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody>
            {allemployees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.salary}</td>
                <td>
                  <button onClick={() => handleDelete(emp.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  )
}

export default App

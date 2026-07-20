import React, { useEffect, useState } from 'react'
import { stdApi } from './apiServices';

const ShowStudents = () => {
  const [allstds, setAllstds] = useState([])
 
     useEffect(() => {
         loadEmployees();
     }, [])
 
     const loadEmployees = async () => {
 
         const { data } = await stdApi.get('/students')
         setAllstds(data)
 
     }
 
 
 
     return (
         <div>
             <h2>All Students</h2>
 
             <table border='2'>
 
                 <thead>
                     <tr>
                         <th>NAME</th>
                         <th>STD</th>
                         <th>MARKS</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         allstds.map((e) => (
                             <tr key={e.id}>
                                 <td>{e.name}</td>
                                 <td>{e.std}</td>
                                 <td>{e.marks}</td>
                             </tr>
                         ))
                     }
                 </tbody>
             </table>
         </div>
     )
 }

export default ShowStudents

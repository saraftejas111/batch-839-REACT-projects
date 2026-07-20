import React, { useEffect, useState } from 'react'
import { empApi } from './apiServices';

const ShowEmployees = () => {

    const [allemps, setAllEmps] = useState([])

    useEffect(() => {
        loadEmployees();
    }, [])

    const loadEmployees = async () => {

        const { data } = await empApi.get('/employees')
        setAllEmps(data)

    }



    return (
        <div>
            <h2>All Employees</h2>

            <table border='2'>

                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>ROLE</th>
                        <th>SALARY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allemps.map((e) => (
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{e.role}</td>
                                <td>{e.salary}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowEmployees

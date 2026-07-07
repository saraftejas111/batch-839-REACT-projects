import React, { useState } from 'react'

const StudentData = () => {

    const [allstd, setAllstd] = useState([])

    const [std, setStd] = useState({ roll: '', name: '', maths: '', english: '', science: '' })

    const handleChange = (e) => {

        let { name, value } = e.target;

        setStd({ ...std, [name]: name === "name" ? value : Number(value) })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        setAllstd([...allstd, std]);

        setStd({ roll: '', name: '', maths: '', english: '', science: '' })
    }


    return (
        <div>

            <h2>Student Form</h2>
            <form onSubmit={handleSubmit}>
                roll : <input type="text" name='roll' value={std.roll} onChange={handleChange} required /> <br /><br />
                name : <input type="text" name='name' value={std.name} onChange={handleChange} required /> <br /><br />
                maths : <input type="text" name='maths' value={std.maths} onChange={handleChange} required /> <br /><br />
                english : <input type="text" name='english' value={std.english} onChange={handleChange} required /> <br /><br />
                science : <input type="text" name='science' value={std.science} onChange={handleChange} required /> <br /><br />

                <button type='submit'>Add Data</button>
            </form>

            <br />

            <table border='2'>
                <thead>
                    <tr>
                        <th>ROLL</th>
                        <th>NAME</th>
                        <th>MATHS</th>
                        <th>ENGLISH</th>
                        <th>SCIENCE</th>
                        <th>TOTAL</th>
                        <th>PERCENTAGE</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allstd.map((s) => (
                            <tr key={s.roll}>
                                <td>{s.roll}</td>
                                <td>{s.name}</td>
                                <td>{s.maths}</td>
                                <td>{s.english}</td>
                                <td>{s.science}</td>
                                <td>{s.maths + s.english + s.science}</td>
                                <td>{(((s.maths + s.english + s.science) / 300) * 100).toFixed(2)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default StudentData

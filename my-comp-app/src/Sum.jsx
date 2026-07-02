import { useState } from "react"

function Sum () {

    let [num1 ,setNum1] = useState(0)
    let [num2 ,setNum2] = useState(0)
    let [sum ,setSum] = useState(0)


    return (
        <>
        <h1>Hello from Sum Component</h1>

        num1 = <input type="text" onChange={(e)=> setNum1(Number (e.target.value))}/> <br /><br />
        num2 = <input type="text" onChange={(t)=> setNum2(Number (t.target.value))}/> <br /><br />

        <button onClick={()=> setSum(num1+num2)}>
            Calculate Sum
        </button>

        <h2>Sum = {sum}</h2>

        </>
    )
}

export default Sum 
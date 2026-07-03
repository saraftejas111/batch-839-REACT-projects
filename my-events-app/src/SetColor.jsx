import React, { useState } from 'react'

const SetColor = () => {

    let [color , setColor] = useState('')

  return (
    <div>
      
      <input type="text" onChange={(e)=>setColor(e.target.value)} />

      <div
      style={{
        backgroundColor : color , 
        height: "200px" , 
        width : "200px"
      }}
      ></div>
    </div>
  )
}

export default SetColor

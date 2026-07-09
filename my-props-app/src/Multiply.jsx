import React from 'react'

const Multiply = ({multi}) => {

    let acceptValue = multi() ; 
  return (
    <div>
      <h2>Multiply = {acceptValue}</h2>
     <h2>Multiply  direct call = {multi()}</h2>
    </div>
  )
}

export default Multiply

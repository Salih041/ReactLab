import React from 'react'

function CalculatorKey({value , onClick , className}) {
  return (
    <button className={className} onClick={()=>{onClick(value)}}>
        {value}
    </button>
  )
}

export default CalculatorKey

import React from 'react'

function Display({value}) {
  return (
    <div className='CalculatorDisplay'>
        <h3>{value === "" ? 0 : value}</h3>
    </div>
  )
}

export default Display

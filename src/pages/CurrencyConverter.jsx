import React from 'react'
import CurrencyApp from '../components/Currencycomponents/CurrencyApp'
import '../css/Currency.css'

function CurrencyConverter() {
  return (
    <div className='CurrencyAppContainer'>
      <h2 className='CurrencyHeader'>Currency Converter</h2>
      <CurrencyApp></CurrencyApp>
    </div>
  )
}

export default CurrencyConverter

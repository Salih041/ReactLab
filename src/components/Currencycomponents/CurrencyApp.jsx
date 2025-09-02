import React, { useState } from 'react'
import axios from 'axios';
import { FaLongArrowAltRight } from "react-icons/fa";

function CurrencyApp() {

    const API_KEY = import.meta.env.VITE_REACTLAB_CURRENCY_API_KEY
    const BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
    const [fromValue , setFromValue] = useState("USD");
    const [toValue, setToValue] = useState("TRY");
    const [amount , setAmount] = useState(0);
    const [result , setResult] = useState(0)

    const exchange = async (base, target)=>
    {
        const response = await axios.get(BASE_URL+"?apikey="+API_KEY+"&base_currency="+base);
        setResult(response.data.data[target]*amount) 
    }

    return (
            <div className='CurrencyConverterApp'>
                <input type="number" className='firstAmount' value={amount} onKeyDown={(e)=>{if(e.key==="Enter"){exchange(fromValue,toValue)}}} onChange={(e)=>{setAmount(e.target.value)}}/>
                <select onChange={(e)=>{setFromValue(e.target.value)}} name="first" id="firstSelect">
                    <option>USD</option>
                            <option>EUR</option>
                            <option>TRY</option>
                            <option>JPY</option>
                            <option>BGN</option>
                            <option>CZK</option>
                            <option>DKK</option>
                            <option>GBP</option>
                            <option>HUF</option>
                            <option>PLN</option>
                            <option>RON</option>
                            <option>SEK</option>
                            <option>CHF</option>
                            <option>ISK</option>
                            <option>NOK</option>
                            <option>HRK</option>
                            <option>RUB</option>
                            <option>AUD</option>
                            <option>BRL</option>
                            <option>CAD</option>
                            <option>CNY</option>
                            <option>HKD</option>
                            <option>IDR</option>
                            <option>ILS</option>
                            <option>INR</option>
                            <option>KRW</option>
                            <option>MXN</option>
                            <option>MYR</option>
                            <option>NZD</option>
                            <option>PHP</option>
                            <option>SGD</option>
                            <option>THB</option>
                            <option>ZAR</option>
                </select>
                <button onClick={()=>{exchange(fromValue,toValue)}}><FaLongArrowAltRight className='arrow'/></button>
                <select onChange={(e)=>{setToValue(e.target.value)}} name="second" id="secondSelect">
                    <option>TRY</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>JPY</option>
                            <option>BGN</option>
                            <option>CZK</option>
                            <option>DKK</option>
                            <option>GBP</option>
                            <option>HUF</option>
                            <option>PLN</option>
                            <option>RON</option>
                            <option>SEK</option>
                            <option>CHF</option>
                            <option>ISK</option>
                            <option>NOK</option>
                            <option>HRK</option>
                            <option>RUB</option>
                            <option>AUD</option>
                            <option>BRL</option>
                            <option>CAD</option>
                            <option>CNY</option>
                            <option>HKD</option>
                            <option>IDR</option>
                            <option>ILS</option>
                            <option>INR</option>
                            <option>KRW</option>
                            <option>MXN</option>
                            <option>MYR</option>
                            <option>NZD</option>
                            <option>PHP</option>
                            <option>SGD</option>
                            <option>THB</option>
                            <option>ZAR</option>
                </select>
                <input type="number" value={result} readOnly className='secondAmount'/>
            </div>
    )
}

export default CurrencyApp

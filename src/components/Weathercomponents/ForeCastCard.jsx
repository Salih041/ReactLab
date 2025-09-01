import React from 'react'

function ForeCastCard({ cardProps }) {

    const date = cardProps.date
    const data = cardProps.day

    return (
        <div className='Card'>
            <span className='CardDate'>{date}</span>
            <img className='CardIcon' src={data.condition.icon} alt="" />
            <span className='CardCondition'>{data.condition.text}</span>
            <span className='CardTemp'>{data.avgtemp_c} °C</span>
            <span className='CardHumidity'>{data.avghumidity}%</span>
        </div>
    )
}

export default ForeCastCard

import React from 'react'

function CurrentWeather(currentProps) {
    const weather = currentProps.currentProps

    return (
        <div className='TodayResultDiv'>
            <div className='CurrentHeader'>
                <span className='HeaderCity'>{weather?.location?.name}</span>
                <span className='HeaderCountry'>{weather?.location?.country}</span>
            </div>
            <div className='CurrentMain'>
                <div className='CurrentLeft'>
                    <span className='Temp'>Temp : {weather?.current?.temp_c} °C</span>
                    <span className='FeelsLikeTemp'>Feels Like : {weather?.current?.feelslike_c} °C</span>
                    <span className='Humidty'>Humidity : {weather?.current?.humidity}%</span>
                    <span className='Wind'>Wind : {weather?.current?.wind_kph} km/h</span>
                </div>
                <div className='CurrentRight'>
                    <img src={weather?.current?.condition?.icon} className='ConditionIcon' />
                    <span className='ConditionText'>{weather?.current?.condition?.text}</span>
                    <span className='LocalTime'>Local: {weather?.location?.localtime}</span>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather

import React, { useEffect, useState } from 'react'
import ForeCastCard from './ForeCastCard';
import CurrentWeather from './CurrentWeather';

function WeatherApp() {

    const BASE_URL = "https://api.weatherapi.com/v1"
    const API_KEY = import.meta.env.VITE_REACTLAB_WEATHER_API_KEY

    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState(null);
    const [weatherForecast, setWeatherForecast] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("");

    const GetWeatherData = async (location) => {
        try {
            setError("");
            setIsLoading(true);
            const forecastResponse = await fetch(`${BASE_URL}//forecast.json?key=${API_KEY}&q=` + location + "&days=5")
            if (!forecastResponse.ok){
                const errorData = await forecastResponse.json();
                throw new Error(errorData?.error?.message || "Something Went Wrong")
            }
            const forecastData = await forecastResponse.json();
            setWeather(forecastData)
            setWeatherForecast(forecastData.forecast.forecastday.slice(1));
        } catch (err) {
            setError(err.message);
            setWeather(null);
            setWeatherForecast([]);
        } finally {
            setIsLoading(false)
            setLocation("");
        }
    }

    return (
        <div className='WeatherAppContainer'>
            <h2 className='WeatherHeader'>Weather Forecast</h2>
            <div className='WeatherMainContainer'>
                <div className='WeatherLeftPart'>
                    <div className='SearchContainer'>
                        <input className='SearchInput' type="text" placeholder='Enter a Location' value={location} onChange={(e) => { setLocation(e.target.value) }} onKeyDown={(e)=>{if(e.key==="Enter") GetWeatherData(location)}}/>
                        <button className='SearchButton' onClick={() => { GetWeatherData(location) }}>Search</button>
                    </div>
                </div>

                {isLoading ? <span style={{margin:"auto", fontSize:"1.5rem"}}>Loading...</span> : weather ? <div className='WeatherRightPart'>
                    <CurrentWeather currentProps={weather} />
                    <span className='ForecastHeader'>4 Day Forecast</span>
                    <div className='UpcomingResultsDiv'>
                        {
                            weatherForecast.map((day) => (
                                <ForeCastCard key={day.date} cardProps={day} />
                            ))
                        }
                    </div>
                </div> : <span className={error?'errorSpan' : ""}>{error ? error : ""}</span>}
            </div>
        </div>
    )
}

export default WeatherApp

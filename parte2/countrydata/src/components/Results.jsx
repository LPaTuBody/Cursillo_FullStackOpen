const CountryData = ({ content }) => (
    <div>
        <h2>{content.name}</h2>
        <div>
            <p>Official name: {content.officialName}</p>
            <p>Capital: {content.capital}</p>
            <p>Region: {content.region}</p>
            <p>Area: {content.area}</p>
            <p>Population: {content.population}</p>
            <p>Languages: </p>
            <ul>
                { Object.values(content.languages).map( lang => <li key={lang}>{lang}</li> ) }
            </ul>
            <div>
                <img src={content.flags.png} alt={content.flags.alt} />
            </div>
        </div>
    </div>
)

const WeatherData = ({ weather }) => {
    // console.log('weather data: ', weather)
    if (!weather || !weather.main) {
        return <div>Loading weather data...</div>
    }
    return(
        <div>
            <h3>Weather in {weather.name}</h3>
            <p>{weather.weather[0].description}</p>
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
            </div>
            <p>Temperature: {Math.round(weather.main.temp - 273.15)} °C</p>
            <p>Wind: {weather.wind.speed} m/s</p>
            <p>Humidity: {weather.main.humidity} %</p>
            <p>Pressure: {weather.main.pressure} hPa</p>
        </div>
    )
}

const Results = ({ content, weather, showClick }) => {
//   console.log(typeof(content))
    if(typeof(content) === 'string'){
        return <div>{ content }</div>
    } else if(content.length > 1 && content.length <= 10) {
        // console.log(content)
        return(
            <ul>
                {content.map( ctry => 
                    <li key={ctry}>
                        {ctry}
                        <button onClick={() => showClick(ctry)}>Show</button>
                    </li>
                )}
            </ul>
        )
    } else {
        // console.log('contenido', content)
        return(
            <div>
                <CountryData content={content} />
                <WeatherData weather={weather} />
            </div>
        )
    }
}

export default Results
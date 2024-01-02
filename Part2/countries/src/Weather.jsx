
const Weather = ({weather:{current}}) => {
    if (current) {
        return (
        <>
            <h2>Weather</h2>
            <h3>Temperature: {current.temperature}celsius</h3>
            <img src={current.weather_icons} alt="icon"/>
            <h3>Wind Speed: {current.wind_speed}</h3>
            <h3>Wind Direction: {current.wind_dir}</h3>
            <h3>Humidity: {current.humidity}</h3>
        </>
    )
    }
}

export default Weather

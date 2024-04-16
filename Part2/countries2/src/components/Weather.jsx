export default function Weather({weather}){
   return (
      <>
         <>
            <h2>Weather</h2>
            <h3>Temperature: </h3><p>{weather.temperature}celsius</p>
            <img src={weather.weather_icons} alt="icon"/>
            <h3>Wind Speed: </h3><p>{weather.wind_speed}</p>
            <h3>Wind Direction: </h3><p>{weather.wind_dir}</p>
            <h3>Humidity: </h3><p>{weather.humidity}</p>
        </>
      </>
   )
}

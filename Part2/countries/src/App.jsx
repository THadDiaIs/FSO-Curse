import { useState, useEffect } from 'react'
import Results from "./Results.jsx"
import Weather from "./Weather.jsx"
import axios from "axios"
import "./App.css"


function App() {
  const [name, setName] = useState("")
  const [countriesList, setCountriesList] = useState([])
  const [weather, setWeather] = useState({})

  useEffect(()=>{
    let url = name ? `name/${name}`: "all"
    axios
      .get(`https://restcountries.com/v3.1/${url}`)
      .then((response)=>{
        setCountriesList(response.data)
        if ( response.data.length === 1){
          axios
            .get(`http://api.weatherstack.com/current?access_key=${import.meta.env.VITE_APP_API_KEY}&query=${response.data[0].name.common}`)
            .then(response => setWeather(response.data))
            .catch(error => console.log("weather error:", error))
        } else {
          setWeather({})
        }
      })
      .catch((error) => console.log("Countries error:", error))
  },[name])

  let btnShowClick = (text) => {
    setName(text)
  }

  return (
    <>
      <div>
        <label>Find Countries <input type="text" value={name} onChange={(e) => setName(e.target.value)}/></label>
      </div>
      <Results countriesList={countriesList} weather={weather} btnShowClick={btnShowClick} />
      <Weather weather={weather} />
    </>
  )
}

export default App

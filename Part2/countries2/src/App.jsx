import { useState } from 'react'
import axios from "axios"
import './App.css'
import { useEffect } from 'react'
import Weather from './components/Weather'
import CountriesList from './components/ContriesList'

function App() {
  const [countriesList, setCountriesList] = useState([])
  const [weather, setWeather] = useState({});
  const [name, setName] = useState('');
  const [showingCountries, setShowingCountries] = useState([])

  useEffect(()=>{
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response)=>setCountriesList(response.data))
      .catch((error) => console.log("Countries list fetch error:", error.message))
  },[])

  useEffect(()=>{
    if (showingCountries.length === 1){
      axios
        .get(`http://api.weatherstack.com/current?access_key=${import.meta.env.VITE_APP_API_KEY}&query=${showingCountries[0].name.common}`)
        .then(response => setWeather(response.data))
        .catch(error => console.log("weather fetch error:", error.message))
    }
  },[showingCountries])

  let filterCountriesList = filterBy => {
    setName(filterBy)
    if (filterBy.length > 0){
      setShowingCountries(countriesList.filter(country => country.name.common.toLowerCase().startsWith(filterBy.toLowerCase())))
    } else {
      setShowingCountries([]);
    }
  }

  return (
    <>
        <h1>Countries App 2.0</h1>
        <h3>Imput a filter for the countries to show</h3>
        <input placeholder='type a country name' type='text' value={name} onInput={(e) => filterCountriesList(e.target.value)}/>

        {countriesList &&
          <CountriesList showingCountries={showingCountries} onclick={newName => {filterCountriesList(newName)}}/>
        }
        {weather.request && <Weather weather={weather}/>}
    </>
  )
}

export default App

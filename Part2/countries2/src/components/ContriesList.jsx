export default function CountriesList({showingCountries, onclick}){
   if (showingCountries.length === 1){

      let cntry = showingCountries[0]
        return (
            <>
                <h2>{cntry.name.common}</h2>
                <h3>{cntry.name.official}</h3>
                <h3> Capital: </h3><p>{cntry.capital[0]}</p>
                <h3> Region: </h3><p>{cntry.region}</p>
                <h3> Population: </h3><p>{cntry.population}</p>
                <h3> Languages: </h3>
                <ul>
                {Object.keys(cntry.languages).map( lang => <li key={lang}>{cntry.languages[lang]}</li> )}
                </ul>
                <div style={ {fontSize: '100px'} }>{cntry.flag}</div>
            </>
        )
   }else {
      return(
      <>
      {showingCountries.slice(0,10).map(country =>
         <div key={country.ccn3}>
         {country.name.common}
         <button onClick={() => onclick(country.name.common)}>
         Show details
         </button>
         </div>
      )}
      </>
   )
   }
}

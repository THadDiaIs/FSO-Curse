
const Results = ({countriesList, btnShowClick, setCity}) => {

    if (countriesList.length > 10){
        return (
            <p>Too many matches or no matches, please specify one more filter</p>
        )
    } else if (countriesList.length > 1){
        return (
            <>
            { countriesList.map(cntry =>
                <div key={cntry.ccn3}>{cntry.name.common} <button onClick={() => btnShowClick(cntry.name.common)}> Show details</button></div>) }
            </>
        )
    } else if (countriesList.length === 1){
        let cntry = countriesList[0]
        return (
            <>
                <h2>{cntry.name.common}</h2>
                <h3>{cntry.name.official}</h3>
                <h3> Capital: {cntry.capital[0]}</h3>
                <h3> Region: {cntry.region}</h3>
                <h3> Population: {cntry.population}</h3>
                <h3> Languages: </h3>
                <ul>
                {Object.keys(cntry.languages).map( lang => <li key={lang}>{cntry.languages[lang]}</li> )}
                </ul>
                <div>{cntry.flag}</div>
            </>
        )
    } else {
        return (
            <p>provide some filter</p>
        )
    }
}

export default Results

import { useState, useEffect } from 'react'
import countryService from './services/countries.js'
import Results from './components/Results.jsx'

const DataForm = ({ dataChange, dataLength }) => {
  // console.log(dataLength)
  if (dataLength === 0) {
    return(
      <div>Loading data...</div>
    )
  }
  return(
    <div>
      <form>
        <label>Find countries </label>
        <input type="text" onChange={dataChange} />
      </form>
    </div>
  )
}

function App() {
  const 
  [countries, setCountry] = useState([]),
  [content, setContent] = useState(''),
  [weather, setWeather] = useState({})

  useEffect(() => {
    countryService.getAll().then(r => {
      // console.log(r)
      setCountry(r)
      console.log('Datos obtenidos')
    })
    .catch(err => console.log("Errorcito: ", err))
  }, [])

  const cCommonNames = countries.map(ct => ct.name.common)

  const vistaPais = (pais) =>{
    countryService
      .getCountry(pais.toLowerCase())
      .then(data => {
        // console.log(data)
        const ctryDataObj = {
          name: data.name.common, 
          officialName: data.name.official,
          capital: data.capital,
          region: data.region,
          languages: data.languages,
          area: data.area,
          population: data.population,
          flags: data.flags
        }
        vistaClima(data.capital)
        setContent(ctryDataObj)
        // console.log(ctryDataObj)
      })
      .catch(err => console.log("Errorcito: ", err))
  } 
      
  const vistaClima = (capital) => {
    countryService
      .getWeather(capital)
      .then(wea => {
        // console.log('Datos del clima: ', wea)
        setWeather(wea)
      })
      .catch(err => {
        console.log("Errorcito del clima: ", err)
        setWeather({})
      })
  }
  // console.log('weather: ', weather)

  const handleDataChange = (e) =>{
    const inp = e.target.value.trim().toLowerCase()
    const findingC = cCommonNames.filter(pais => {
      return pais.toLowerCase().indexOf(inp) !== -1
    })
    // console.log('input', inp)
    // console.log('paises encontrados', findingC)

    if(findingC.length >= 10){
      setContent('Too many matches. Please specify another filter')
    } else if(findingC.length > 1 && findingC.length < 10){
      // console.log('Países: ', findingC)
      setContent(findingC)
    } else {
      // console.log("País: ", findingC[0])
      vistaPais(findingC[0])
    }
  }

  const handleShowClick = (pais) => vistaPais(pais)

  return(
    <div>
      <h1>Countries Data</h1>
      <DataForm dataChange={handleDataChange} dataLength={countries.length} />
      <Results content={content} weather={weather} showClick={handleShowClick}/>
    </div>
  )
  
}

export default App
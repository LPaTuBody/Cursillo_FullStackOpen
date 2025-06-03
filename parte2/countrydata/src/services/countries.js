import axios from 'axios'
const 
allUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all',
ctryUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name',
geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?', // geocoding API para las coordenadas
weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?' // current weather data API

const api_key = import.meta.env.VITE_SOME_KEY

const getAll = () => axios.get(allUrl).then(resp => resp.data) 

const getCountry = (ctryName) => (
    axios.get(`${ctryUrl}/${ctryName}`).then(resp => resp.data)
)

const getWeather = (capitalName) => (
    axios
    .get(`${geoUrl}q=${capitalName}&limit=1&appid=${api_key}`)
    .then(resp => {
        const lat = resp.data[0].lat, lon = resp.data[0].lon
        // console.log(lat, lon)
        return axios
        .get(`${weatherUrl}lat=${lat}&lon=${lon}&appid=${api_key}`)
        .then(weaData => {
            // console.log("Datos del clima: ", weaData.data)
            return weaData.data
        })
        .catch(err => { console.log("Errorcito del clima: ", err) })
    })
    .catch(err => {
        console.log("Errorcito coordenadas: ", err)
        return null
    })
)

/* 
q={city name},{state code},{country code}&limit={limit}&appid={API key}
lat={lat}&lon={lon}&appid={API key}
*/

export default { getAll, getCountry, getWeather }
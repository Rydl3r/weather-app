import {useState, useEffect} from 'react'
import WeatherSide from './WeatherSide'
import TodayInfo from './TodayInfo'
import WeekInfo from './WeekInfo'

function App() {
  const [weather, setWeather] = useState({"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":20.46,"feels_like":20.23,"temp_min":18.53,"temp_max":22.4,"pressure":1006,"humidity":64},"visibility":10000,"wind":{"speed":5.66,"deg":150},"clouds":{"all":75},"dt":1628164746,"sys":{"type":2,"id":2019646,"country":"GB","sunrise":1628137828,"sunset":1628192550},"timezone":3600,"id":2643743,"name":"London","cod":200})
  const [city, setCity] = useState("London")
  const [tempCity, setTempCity] = useState("London")

  const fetchWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=473d1ee43c0e104fb437f7a5e0e8ecd4&units=metric`)
    setTempCity(city)
    setCity("")
    const data = await response.json()
    setWeather(data)
    console.log(weather)
    
  }

  useEffect(() => {
    fetchWeather()
  }, [])


  return (
    <div className="App">
    <div className="container">
      <WeatherSide city={tempCity} weather={weather}/>
      <div className="info-side">
        <TodayInfo weather={weather}/>
        <WeekInfo weather={weather}/>
        <form className="location_selector" onSubmit={(e) => {e.preventDefault()}}>
          <input className="location_input" placeholder="Type your city..." value={city} onChange={(e)=> setCity(e.target.value)}/>
          <button className="getWeatherBtn" onClick={fetchWeather}>Get Weather</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default App;

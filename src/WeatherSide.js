import React from 'react'

const WeatherSide = ({city, weather}) => {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let today = new Date().toISOString().slice(0, 10)
    let dateObj = new Date()
    let weekday = capitalizeFirstLetter(dateObj.toLocaleString("default", { weekday: "long" }))
    let imgLink = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    const imgStyle = {  width: "100px" }
       
    return (
        <div className="weather-side">
        <div className="weather-gradient"></div>
        <div className="date-container">
          <h2 className="date-dayname">{weekday}</h2> <span className="date-day">{today}</span><i className="location-icon" data-feather="map-pin"></i><span className="location">{city}</span> </div>
        <div className="weather-container"> <i className="weather-icon" data-feather="sun"></i>
          <img style={imgStyle} src={imgLink}/>
          <h1 className="weather-temp">{weather.main.temp}</h1>
          <h3 className="weather-desc">{weather.weather[0].description}</h3> </div>
      </div>






    )
}

export default WeatherSide

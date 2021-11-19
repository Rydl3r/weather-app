import React from 'react'
import { WiCloud, WiSmallCraftAdvisory, WiStrongWind, WiTime12 } from "react-icons/wi";

const WeekInfo = ({weather}) => {
    const iconStyle = { color: "white", fontSize: "24px", textAlign:"center", marginLeft: "10px" }

    return (
        <div className="week-container">
          <ul className="week-list">
            <li><WiCloud style={iconStyle}/><span className="day-name">Clouds</span><span className="day-temp">{weather.clouds.all}</span></li>
            <li><WiTime12 style={iconStyle}/><span className="day-name">Press</span><span className="day-temp">{weather.main.pressure}</span></li>
            <li><WiSmallCraftAdvisory style={iconStyle}/><span className="day-name">Visib</span><span className="day-temp">{weather.visibility}</span></li>
            <li><WiStrongWind style={iconStyle}/><span className="day-name">Wind</span><span className="day-temp">{weather.wind.speed}</span></li>
            <div className="clear"></div>
          </ul>
        </div>
    )
}

export default WeekInfo

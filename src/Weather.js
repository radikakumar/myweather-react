import React from 'react';
import axios from 'axios';
import "./Weather.css";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function displayWeather (response){
    let temperature = response.data.main.temp;
    alert (`It is ${temperature}C in ${props.city}`)
    }
 let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=2f9f7ec47cab1795a041f2ec45034bf2&units=metric`;
 axios.get(url).then(displayWeather);   
    
 return (
        <h2 className="WM">
            Weather Monitor
            <Loader
              type="Audio"
              color="#00BFFF"
              height={100}
              width={100}
            />
      </h2>
    );

 }



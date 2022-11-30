import axios from "axios"
import { useState} from "react";
import moment from "moment"
import sunny from "./assets/sunny.png"
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [cityName, setCityName] = useState("")

  const getWeatherHandler = () =>{
    axios.get(`http://localhost:3000/weather/${cityName}`)
    .then(response => {
      console.log("response: ", response.data);
      setWeatherData(response.data)

  })
  .catch(err => {
      console.log("error: ", err);
  })
  console.log("WeatherData ",weatherData)



  }





  
  return (

    

    <div className='main-div'>
      <h1 className="main">Weather App</h1>
      <input type="text" onChange={(e) =>{
        setCityName(e.target.value)

      }} />
      <button onClick={getWeatherHandler}>Get Weather</button>

      {(weatherData == null)? null :
        <div className='sub-div'>

          <div className='left-div'>
            <div className='content-div'>
              <div className='date-div'>
                <h2>{moment().format('dddd')}</h2>
                <p>{moment().format(" D MMM YYYY")}</p>

              </div>

              <div className='city-div'>
                <p>{weatherData?.city}</p>

              </div>

              <div className="icon">
                <img src={sunny} alt="" height="80px" width="80px" />

              </div>

              <div className='temp-div'>
                <h1>{weatherData?.temp}</h1>
                <p>{weatherData?.weather}</p>


              </div>

            

            </div>
      
          

        </div>

        <div className="right-div">
          <div className="humidity">
            <p>Humidity: <span>{weatherData?.humidity}</span> </p>

          </div>

          <div className="wind">
            <p>Wind: <span>{weatherData?.wind}</span></p>

          </div>

          <div className="max">
            <p>Max Temperature: <span>{weatherData?.maximum}</span></p>

          </div>

          <div className="min">
            <p>Min Temperature: <span>{weatherData?.minimum}</span></p>

          </div>
          
        </div>
     

      </div>

      
      }
   

    

    </div>
  )

  
}

export default App;

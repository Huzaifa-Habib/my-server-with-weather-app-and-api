import axios from "axios"
import { useState} from "react";
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [cityName, setCityName] = useState("")

  const getWeatherHandler = () =>{
    axios.get("http://localhost:3000/weather")
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
      <input type="text" onChange={(e) =>{
        setCityName(e.target.value)

      }} />
      <button onClick={getWeatherHandler}>Get Weather</button>

      {(weatherData == null)? null :
        <div className='sub-div'>

        <div className='left-div'>
          <div className='content-div'>
            <div className='date-div'>
              <p>{weatherData?.temp}</p>
              <h2>Monday</h2>
              <p>28 Nov 2022</p>

            </div>

            <div className='city-div'>
              <p>London</p>

            </div>

            <div className='temp-div'>
              <h1>10°C</h1>

            </div>

            <div className='weathertype-div'>
              <p>Thunderstrom</p>

            </div>

          </div>
      
          

        </div>
     

      </div>

      
      }
   

    

    </div>
  )

  
}

export default App;

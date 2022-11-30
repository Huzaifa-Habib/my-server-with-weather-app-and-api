import express from "express" 
import path from 'path';
import cors from 'cors';



const app = express()
const port = process.env.PORT || 3000
app.use(cors());



app.get('/weather', (req, res) => {
  console.log("request ip: ", req.ip);
  res.send({
      temp: "30°C",
      wind:"7 km/h",
      humidity: "20%",
      minimum: "25°C",
      maximum: "32°C" ,
      weather:"Thunderstrom"



  });
})

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './weatherapp-with-server/build')))
app.use('*', express.static(path.join(__dirname, './weatherapp-with-server/build')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
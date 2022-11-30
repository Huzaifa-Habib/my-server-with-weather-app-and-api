import express from "express" 
import path from 'path';



const app = express()
const port = process.env.PORT || 3000

app.get('/abc', (req, res) => {
    console.log("Request Ip", req.ip)
    res.send('Hello World! ' + new Date().toString() + " " + req.ip);

})


// app.get('/weather', (req, res) => {
//   console.log("request ip: ", req.ip);
//   res.send({
//       temp: 30,
//       humidity: 72,
//       serverTime: new Date().toString()
//   });
// })

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './weatherapp-with-server/build')))
app.use('*', express.static(path.join(__dirname, './weatherapp-with-server/build')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const {insertSensorData, getAllSensorData} = require('./database')

const uri = process.env.MONGO_URI;
const PORT = process.env.PORT;


const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});




app.use(express.json())

app.post('/insertData',  function (request, response)  {
    let data = request.body
    insertSensorData(client, data, ()=>{
        response.status(200).send({message: "data inserted"})
    })
})

app.get('/getAllSensorData', function(request, response){
    getAllSensorData(client, (result)=>{
        response.status(200).send({SensorDataArray: result})
    })
})

app.listen(PORT, () => console.log(`Garden Management Service running at port `+ PORT))
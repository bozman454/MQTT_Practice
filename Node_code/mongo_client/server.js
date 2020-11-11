const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;


const uri = "mongodb+srv://Willem:mieper@gardendata.a5fmw.mongodb.net/Garden1";


const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = require('./database')

app.use(express.json())

app.post('/insertData',  function (request, response)  {
    let data = request.body
    db.insertSensorData(client, data, ()=>{
        response.status(200).send({message: "data inserted"})
    })
})

app.listen(5000, () => console.log(`server is up at port 5000`))
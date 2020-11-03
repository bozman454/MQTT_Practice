const express = require('express');
const app = express();

const mqtt_publisher = require('./mqtt_publisher.js');

app.use(express.json())

app.post('/publishMessage',  function (request, response)  {
    let message = request.body.message
    mqtt_publisher.publishToBroker(process.env.TOPIC, message, ()=>{
        response.status(200).send({message: 'message sent'})
    })

})

app.listen(5000, () => console.log(`server is up at port 5000`))
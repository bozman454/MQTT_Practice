const mqtt = require('mqtt')
require('dotenv').config();
const fetch = require('node-fetch')
const url = `mqtt://${process.env.BROKER_ADDR}`;
const options = {
    clientId: 'print_topic client'
}
const topic = process.env.TOPIC;
console.log("Starting MQTT Client")
console.log(`Attempting to trying to connect to ${url} + ${topic}`)

const client = mqtt.connect(url, options)


client.subscribe(topic);



client.on("connect", (connack) => {
    console.log('connected to broker')

})

client.on('message', (topic, message, packet) => {
    
    console.log('message arrived')
    let out_obj = {time: rn, message}
    fetch('http://localhost:5000/insertData', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: out_obj
    })
        
        .then(response => response.json())
        .then(data => {
            console.log('data inserted');
        })
        .catch((error) => {
            console.error('Error:', error);
        });

});




//does not handle connection url errors
client.on("error", (error) => {
    console.log("Can't connect" + error)
    //turns off app
    process.exit(1);
})

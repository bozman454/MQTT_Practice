const mqtt = require('mqtt')
const mqtt_publisher = require('./mqtt_publisher.js');
require('dotenv').config();
const url = process.env.BROKER_ADDR;
const options = {
    clientId: 'print_topic client'
}
const topic = process.env.TOPIC;

console.log(`trying to connect to ${url} + ${topic}`)

const client = mqtt.connect(url, options)


client.subscribe(topic);



client.on("connect", (connack ) => {
    console.log(' connected')
    
})



//when message arrives from broker
client.on('message', (topic, message, packet) => {
    console.log(`Message from Sensor ${message}`);
    console.log(JSON.parse(message));
    //INSERT READINGS HERE
    

});




//does not handle connection url errors
client.on("error", (error) => {
    console.log("Can't connect" + error)
    //turns off app
    process.exit(1);
})
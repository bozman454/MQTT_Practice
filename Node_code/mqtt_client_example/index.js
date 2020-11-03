const mqtt = require('mqtt')

const mqtt_publisher = require('./mqtt_publisher.js');


require('dotenv').config();



const url = process.env.BROKER_ADDR;
const options = {
    clientId: process.env.CLIENT_ID
}


const topic = process.env.TOPIC;




console.log(`trying to connect to ${url}`)
const client = mqtt.connect(url, options)

client.on("connect", () => {


    console.log('connected')
    
    client.subscribe(topic);

    mqtt_publisher.publishMessage(client,process.env.TOPIC, 'TEST', ()=>console.log('message published'))

})




//does not handle connection url errors
client.on("error", (error) => {
    console.log("Can't connect" + error)
    //turns off app
    process.exit(1);
})


client.on('message', (topic, message, packet) => {
    console.log("message is " + message);
    console.log("topic is " + topic);
    //insert into DB

});




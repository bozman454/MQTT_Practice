const mqtt = require('mqtt')

require('dotenv').config();



const url = process.env.BROKER_ADDR;
const options = {
    clientId: process.env.CLIENT_ID
}

console.log(`trying to connect to ${url}`)
const client = mqtt.connect(url,options)

client.on("connect", () => {
    console.log('connected')
    client.publish("testtopic", "test message",{
        retain:true,
        qos:1})
})



client.on("error", (error) => { console.log("Can't connect"+error)})



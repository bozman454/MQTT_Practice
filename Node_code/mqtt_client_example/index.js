const mqtt = require('mqtt')

require('dotenv').config();



const url = process.env.BROKER_ADDR;
const options = {
    clientId: process.env.BROKER_ADDR
}

const client = mqtt.connect(url,options)

client.on("connect", () => {
    console.log('on it')
})

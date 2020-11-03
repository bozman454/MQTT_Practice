module.exports ={ 
    publishToBroker
};

const mqtt = require('mqtt')
require('dotenv').config()
const url = process.env.BROKER_ADDR;
const options = {
    clientId: process.env.CLIENT_ID
}
const topic = process.env.TOPIC;


function publishToBroker(topic, message, cb) {
    let client = mqtt.connect(url,options)
    client.on('connect', function () {
        console.log(`[MQTT] about to send message to` + `${topic}`);
        client.publish(topic, message, {
            qos: 2
        });
        client.end();
    })
    cb();
}


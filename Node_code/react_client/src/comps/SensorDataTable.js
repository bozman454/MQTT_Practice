import React, { useEffect, useState } from "react";

var mqtt = require('mqtt');
var options = {
    clientId: 'react'    
};
var client  = mqtt.connect('mqtt://192.168.86.85', options);

// preciouschicken.com is the MQTT topic
client.subscribe('SensorData');


export default function SensorDataTable() {

    useEffect(() => {
        console.log('yo')
        client.on('message', function (topic, message) {
            console.log(message)
            client.end();
            });
    },[])

    // const message, setMessage = useState[""]

    return (<p>table </p>)


}
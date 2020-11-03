import React, { useEffect, useState } from "react";

var mqtt = require('mqtt');
var options = {
    clientId: 'react'    
};
var client  = mqtt.connect('mqtt://192.168.86.85:1883', options);

// preciouschicken.com is the MQTT topic
client.subscribe('SensorData');


export default function SensorDataTable() {

    useEffect(() => {
        console.log('yo')
        client.on('message', function (topic, message) {
            console.log(message);
            client.end();
            });
    

        async function fetchData() {
            const res = await fetch("http://localhost:5000/api/v1/getSurveys",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({  }),
                })
            
            }
    },[])

    return (<p>table</p>)


}
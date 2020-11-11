import React, { useEffect, useState } from "react";
const fetch = require('node-fetch');



export default function SensorDataTable() {

    const [readings, setReadings] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://192.168.86.94:5000/getAllSensorData')
            .then(response => response.json())
            .then(readingsarr => {
                console.log(readingsarr);
                setLoading(false);
                setReadings(readingsarr.SensorDataArray)
            })
            .catch(err => console.log(err))
    }, [])


    return (<div>{
        loading ? <p>loading </p> :
         <div><table><th>AID</th><th>TIME</th><th>humidity</th><th>light</th><th>moisture</th><th>temperature</th>
             {readings.map((entry)=>{
                return <tr><td>{entry.readings.aid}</td><td>{entry.time}</td><td>{entry.readings.humidity}</td><td>{entry.readings.light}</td><td>{entry.readings.moisture}</td><td>{entry.readings.temperature}</td></tr>
             })}</table>
        </div>}
    </div>)


}
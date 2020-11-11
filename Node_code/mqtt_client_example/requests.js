require('dotenv').config();

module.exports = {
    sendSensorData
};

const fetch = require('node-fetch')


function sendSensorData(data) {
    let datetime = new Date();
    let out = {
        time: datetime,
        readings: data
    }
    fetch(`http://${process.env.GARDEN_MANAGEMENT}:5000/insertData`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(out)
    })
        .then(response => response.json())
        .then(data => {
            console.log('data inserted');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


module.exports = {
    insertSensorData
};

const fetch = require('node-fetch')


function insertSensorData(data) {

    fetch('http://localhost:5000/insertData', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data
    })
        .then(response => response.json())
        .then(data => {
            console.log('data inserted');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
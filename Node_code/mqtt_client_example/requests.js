require('dotenv').config();

module.exports = {
    sendSensorData
};

const axios = require('axios')


function sendSensorData(data) {
    let datetime = new Date();
    
    axios.post(`http://${process.env.GARDEN_MANAGEMENT}:5000/insertData`,{
         time: datetime,
        readings: data 
    })
        .then(data => {
            console.log('data inserted');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
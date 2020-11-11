module.exports = {
    insertSensorData
}

function insertSensorData(client, data, cb){
    client.connect(err => {
        if (err) throw err;
        client.db("Garden1").collection("SensorData").insertOne({data}, (err, result) => {
            if(err) throw err;
            cb();
        })
    
    });
}


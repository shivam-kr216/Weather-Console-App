const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d5c55eb50868a5502cd7b577b556f2e2&query=' + latitude + ',' + longitude;
    request({ url: url, json: true }, (error, {body}) => {
        //console.log(response.body);
        if(error){
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error){
            callback('Unable to find location. Try another search.', undefined);
        } else{
            callback('It is currently ' + body.current.temperature + ' degree out. It feels like ' + body.current.feelslike + ' degree out');
        }
    })
}

module.exports = forecast;

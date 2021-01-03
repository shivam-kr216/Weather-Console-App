//console.log('Starting');

//setTimeout(()=>{
//    console.log('2 second timer')
//},2000)

//setTimeout(()=>{
//    console.log('0 second timer')
//},0)

//console.log('Finishing');

//const url = 'http://api.weatherstack.com/current?access_key=d5c55eb50868a5502cd7b577b556f2e2&query=37.8267,-122.4233&units=f';
//REQUEST IS A FUNCTION WHICH TAKES TWO ARGUMENTS. FIRST ONE URL (ANY DATA (OPTION OBJECT)) & SECOND ONE IS FUNCTION 
//WHICH SPECIFY WHAT WE WANT TO DO WITH THE DATA
//IT IS CALLED WITH TWO ARGUMENTS ONE IS ERROR AND OTHER IS RESPONSE
//json: true, convert the data into javaScript object so no need to parse 
//request({ url: url, json: true}, (error, response)=>{
    //console.log(response);
    //const data = JSON.parse(response.body);
    //console.log(data.current);
    //console.log(response.body.current.weather_descriptions);
//    if(error){
//        console.log('Unable to connect to weather service!');
//    } else if(response.body.error){
//        console.log('Unable to find location!')
//    } else{
//        console.log(`It is currently ${response.body.current.temperature} degree out. It
//        feels like ${response.body.current.feelslike} degree out`);
//    }
//})

//Geocoding
//const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/12whaaat.json?access_token=pk.eyJ1Ijoic2hpdmFta3IyMTYiLCJhIjoiY2tqYTlzZ3BkNzh0NDJybGJ5OGI4cG4ycCJ9.KO_XfuLK_2ZaqRP8FqtaEw&limit=1";
//request({ url: geocodeURL, json: true }, (error, response) => {
    
//    if(error){
//        console.log('Unable to connect to weather service!');
//    } else if(response.body.message || response.body.features.length===0){
//        console.log('Unable to find location. Try another search.')
//    } else{
//        const latitude = response.body.features[0].center[1];
//        const longitude = response.body.features[0].center[0] 
//        console.log(`Latitude: ${latitude} and Longitude: ${longitude}`);
//    }
//});

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if(!address){
    console.log('Please provide an address!')
}
else{
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if(error){
            //console.log(latitude)
            return console.log(error);
        }
        //console.log(data)
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error);
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}














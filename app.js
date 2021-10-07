const request = require('request')
const geocode = require('./utils/geocoding')
const forecast = require("./utils/forecast")


const city = process.argv[2]

if(!city){
    console.log("Please provide a location!!!")
} else {
    geocode(city,(error,{latitude , longitude, location})=> {
        if(error){
            return console.log(error);
        }
        // console.log('Data', data);
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        });
    });
}


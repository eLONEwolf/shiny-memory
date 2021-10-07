const request = require('request')


const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=58cf65c931a74c64aae141221212503&q='+ latitude + ',' + longitude;

    request({ url , json:true }, (error,{body}) => {
        if(error){
            callback( 'Unable to connect to the weather service! Try Again?' , undefined);
        } else if (body.error){
            callback('Please enter valid input (Enter a location)!',undefined)
        }
        else{
            const getback = body.current.condition.text + ".\n" + body.current.temp_c + "°C is today's temperature \n" +
                            "Wind (kph) - " + body.current.wind_kph + " ("+body.current.wind_dir+") " +"\n" + 
                            "Humidity - " + body.current.humidity + "\n" +
                            "Feels like " + body.current.feelslike_c;
            callback(undefined,getback);
                // localTime = response.body.location.LocalTime,
                // weatherText = response.body.current.condition.text,
                // icon = response.body.current.condition.icon,
        }
    });

}


module.exports = forecast;




// const url = 'http://api.weatherapi.com/v1/current.json?key=58cf65c931a74c64aae141221212503&q=28.010952,73.314789'               

// request({ url:url,json:true},(error, response)=>{
    
    
// })
//



// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)





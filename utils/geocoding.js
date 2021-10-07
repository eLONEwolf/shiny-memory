

// Take location input and get coordinates using the mapbox geocoding api.





const request = require('request');

const geocode =(address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=<access token here>'

    request({url, json:true },(error,{body})=>{
        if(error){
            callback('Unable to connect to the geocoding service! Try Again? ',undefined);
        } else if(body.features.length===0){
            callback("Please enter valid input (Enter a location name properly!)",undefined);
        } else {
            callback(undefined,{
                latitude  : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location  : body.features[0].place_name,
            });
        }
    })
}

module.exports = geocode


// IMPLEMENTATION 
// Setting the api usage
//geocoding

//address ->lat/long -> weather

// const url_geocode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/varanasi.json?access_token=&limit=1'



//
// request({ url:url_geocode,json:true},(error, response)=>{
//     if(error){
//         console.log("Unable to connect to the geocoding service! Try Again?");
//     } else if(response.body.features.length===0){
//         console.log("Please enter valid input (Enter a location name properly!)")
//     } else{
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
//         console.log(latitude,longitude);
//     }
// })

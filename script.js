/*
This code uses the Geolocation API to get the current location (latitude and longitude) of the user. It asks for permission in the browser and returns the coordinates if the user allows.

*/ 

navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position)
},
(err)=>{
    console.log(err)
}
);
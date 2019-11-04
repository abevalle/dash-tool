var dash_button = require('node-dash-button');
var dash = dash_button("ac:63:be:d6:15:a5", null, null, 'all'); //address from step above
const axios = require('axios')


dash.on("detected", function (){
    console.log("omg found");
    axios.get('http://localhost:3001/toggle?ip=192.168.1.42')
    .then(function (response) {
        console.log('toggle')
    })
}); 
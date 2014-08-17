var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var hostname = "192.168.1.28",
    username = "newdeveloper",
    api;

api = new HueApi(hostname, username);

// --------------------------
// Using a promise
// api.getFullState().then(displayResult).done();
// Set light state to 'on' with warm white value of 500 and brightness set to 100%
// var state = lightState.create().on().white(500, 40);.effect('colorloop');
// var state = lightState.create().on().rgb(255, 255, 255).effect('none');
var state = lightState.create().off().brightness(50).rgb(0, 100, 200).transition(5);
// --------------------------
// Using a promise
api
    .setLightState(3, state)
    // .then(api.setLightState(3, lightState.create().on().brightness(50)))
    // .then(api.setLightState(3, lightState.create().on().brightness(70)))
    // .then(api.setLightState(3, lightState.create().on().brightness(20)))
    .then(displayResult)
    .done();


// on()
// off()
// alert() flash the light once
// alert(isLong) if isLong is true then the alert will flash 10 times
// white(colorTemp, brightPercent) where colorTemp is a value between 154 (cool) and 500 (warm) and brightPercent is 0 to 100
// brightness(percent) where percent is the brightness from 0 to 100
// hsl(hue, saturation, brightPercent) where hue is a value from 0 to 359, saturation is a percent value from 0 to 100, and brightPercent is from 0 to 100
// xy(x, y) where x and y is from 0 to 1 in the Philips Color co-ordinate system
// rgb(red, green, blue) where red, green and blue are values from 0 to 255 - Not all colors can be created by the lights
// transition(seconds) this can be used with another setting to create a transition effect (like change brightness over 10 seconds)
// effect(value) this can be set to 'colorloop' or 'none'. The 'colorloop' rotates through all available hues at the current saturation level

var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var config = require('./config.js');

var api = new HueApi(config.hostname, config.username),
    state;

var LEFT = 1;
var RIGHT = 2;
var FLOOR = 3;
var SECOND = 1;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;

var lights = [LEFT, RIGHT, FLOOR];
state = lightState.create().off().transition(MINUTE * 3);

lights.forEach(function(light) {
    api.setLightState(light, state).then(displayResult);
});

var request = require('request');
var bridgeURL = 'http://192.168.1.28/api/';
var login = 'newdeveloper';

var url = 'lights/2/state';
var states = [{ "on": false }, { "on": true }];

var lamps = [2, 1, 3];

var i = 0;
[true, false, true, false].forEach(function(state) {
    [2, 1, 3].forEach(function(lamp) {
        i++;
        (function(lamp, state) {
            setTimeout(function() {
                changeState(lamp, state);
            }, i * 500);
        }(lamp, state))
    });
});

function changeState(lamp, state) {
    request({
        method: 'PUT',
        url: bridgeURL + login + '/lights/' + lamp + '/state',
        json: {
            on: state
        }
    }, function(err, res, body) {
        console.log(body);
    });
}

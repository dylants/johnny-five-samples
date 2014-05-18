"use strict";

var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
    var led;

    // Create an Led on pin 13 and strobe it on/off
    // Optionally set the speed; defaults to 100ms
    led = new five.Led(13);

    led.strobe(1000);
});

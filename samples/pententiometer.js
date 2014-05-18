"use strict";

var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
    var sensor, led;

    sensor = new five.Sensor({
        pin: "A0",
        freq: 250
    });
    led = new five.Led(13);

    // scale the strobe effect from 50ms to 1000ms
    sensor.scale([50, 1000]).on("change", function() {
        console.log(this.value);
        led.strobe(this.value);
    });
});

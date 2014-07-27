"use strict";

var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
    var sensor, led;

    sensor = new five.Sensor("A0");
    led = new five.Led(9);

    // sensor.scale(0, 180).on("change", function() {
    //     // this.value will reflect a scaling from 0-1023 to 0-180
    //     console.log(this.value);
    // });

    // so 512 is the middle of 0 - 1024, but that's a bit too dark
    // for this demo. so instead let's use something higher
    sensor.within([0, 800], function() {
        led.on();
    });
    sensor.within([801, 1023], function() {
        led.off();
    });
});

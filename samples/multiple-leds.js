"use strict";

var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
    var leds;

    // create an array of our 8 LEDs
    leds = [
        new five.Led(2),
        new five.Led(3),
        new five.Led(4),
        new five.Led(5),
        new five.Led(6),
        new five.Led(7),
        new five.Led(8),
        new five.Led(9)
    ];

    // this function turns on one LED while
    // turning off another further down the line
    function turnOn(ledNum) {
        var offLed, nextLed;

        // turn on the current LED
        leds[ledNum].on();

        // determine which LED to turn off (up 4 from current)
        // but make sure to loop back around (with the %)
        offLed = (ledNum + 4) % leds.length;
        // turn the LED off
        leds[offLed].off();

        // determine the next LED to turn on
        // but make sure to loop back around (with the %)
        nextLed = (++ledNum) % leds.length;

        // call the function again after a short sleep
        setTimeout(function() {
            turnOn(nextLed);
        }, 50);
    }

    // start by turning on the first LED
    turnOn(0);
});

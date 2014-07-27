"use strict";

var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
    var redLED, greenLED, blueLED;

    // red is LED 9
    redLED = new five.Led(9);
    // green is LED 10
    greenLED = new five.Led(10);
    // blue is LED 11
    blueLED = new five.Led(11);

    // Pulse the LEDs randomly
    redLED.pulse(300);
    greenLED.pulse(700);
    blueLED.pulse(450);

    // Inject LEDs object into REPL session
    this.repl.inject({
        redLED: redLED,
        greenLED: greenLED,
        blueLED: blueLED
    });

    // fadeIn( duration ) , fadeOut( duration )
    // Wait 3 seconds, then fade the LED to full brightness
    // over random durations
    this.wait(3000, function() {
        // We have to call stop() or it will keep pulsing
        redLED.stop().off();
        greenLED.stop().off();
        blueLED.stop().off();

        redLED.fadeIn(5000);
        greenLED.fadeIn(3000);
        blueLED.fadeIn(8000);
    });

    // fade(value, duration[, callback])
    // 
    // Fade to analog brightness of 10 over 4 seconds
    // 
    // Note, this is 10 seconds from programm execution,
    // not 10 seconds from the previous wait call.
    // You would need to nest the waits or use something
    // like `temporal` to be more precise in sequencing.
    this.wait(10000, function() {
        // resetting in case previous animation running
        redLED.stop().off();
        greenLED.stop().off();
        blueLED.stop().off();

        redLED.fade(10, 4000, function() {
            console.log("fade finished");
        });
        // others are random times
        greenLED.fade(10, 5000, function() {
            console.log("fade finished");
        });
        blueLED.fade(10, 3000, function() {
            console.log("fade finished");
        });
    });

    // brightness(value)
    // 
    // Set analog brightness to 125
    this.wait(20000, function() {
        redLED.brightness(125);
        greenLED.brightness(75);
        blueLED.brightness(100);
    });
});

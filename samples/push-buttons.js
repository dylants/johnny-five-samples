"use strict";

var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
    var led, button1, button2, button1Down, button2Down;

    // our LED is on pin 13
    led = new five.Led(13);

    // our buttons are on pins 2 and 3,
    // and both invert the signals (down is up)
    button1 = new five.Button({
        pin: 2,
        invert: true
    });
    button2 = new five.Button({
        pin: 3,
        invert: true
    });

    // initial state is both are up (not down)
    button1Down = false;
    button2Down = false;

    // if the button changes state, update the variable
    // and also call the update LED function
    button1.on("up", function() {
        button1Down = false;
        updateLED();
    });
    button1.on("down", function() {
        button1Down = true;
        updateLED();
    });

    button2.on("up", function() {
        button2Down = false;
        updateLED();
    });
    button2.on("down", function() {
        button2Down = true;
        updateLED();
    });

    function updateLED() {
        // if both NOT pressed, or both pressed,
        // turn the LED off. Else, turn it on
        // (so basically if you press one button the LED turns on)
        if (button1Down && button2Down) {
            led.off();
        } else if (!button1Down && !button2Down) {
            led.off();
        } else {
            led.on();
        }
    }
});

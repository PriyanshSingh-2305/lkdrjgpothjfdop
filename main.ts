basic.forever(function () {
    basic.showNumber(Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 3))
})

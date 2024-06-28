input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    setup = 1
    strip.showRainbow(1, 360)
    strip.show()
    basic.showNumber(setup)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    setup = 0
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.showNumber(setup)
})
let strip: neopixel.Strip = null
let setup = 0
setup = 0
strip = neopixel.create(DigitalPin.C16, 9, NeoPixelMode.RGB)
strip.clear()
basic.showNumber(setup)
basic.forever(function () {
    if (setup == 1) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
})

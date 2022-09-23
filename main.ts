input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(x, y)
            basic.pause(100)
        }
    }
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= y; x++) {
            led.plot(x, y)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(4 - x, 4 - y)
            basic.pause(100)
            led.plot(4 - y, 4 - x)
        }
    }
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.unplot(4 - x, 4 - y)
            basic.pause(100)
            led.unplot(4 - y, 4 - x)
        }
    }
})

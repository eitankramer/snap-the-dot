input.onButtonPressed(Button.A, function () {
    if (a.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
let a: game.LedSprite = null
a = game.createSprite(2, 2)
basic.forever(function () {
    a.move(1)
    a.ifOnEdgeBounce()
    basic.pause(100)
})

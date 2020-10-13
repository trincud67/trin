input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . # . # .
        . # # # .
        # # # # #
        . # # # .
        . # . # .
        `)
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        # # # # #
        `)
    basic.showIcon(IconNames.StickFigure)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
})
basic.showNumber(1)
basic.showNumber(2)
basic.showString("trin")
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Happy)
basic.showString("63215476")
basic.showLeds(`
    . . # . .
    . # . # .
    # # # # #
    . # # # .
    # # # # #
    `)
basic.showIcon(IconNames.StickFigure)

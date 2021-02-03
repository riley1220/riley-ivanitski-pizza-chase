sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite2.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
})
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 4 5 5 5 5 5 5 . . . . . 
    . . . 4 5 5 5 5 5 5 5 5 . . . . 
    . . 4 5 5 5 f 5 5 f 5 5 5 . . . 
    . . 4 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 4 5 5 f 5 5 5 5 f 5 5 . . . 
    . . 4 5 5 5 f f f f 5 5 5 . . . 
    . . . 4 5 5 5 5 5 5 5 5 . . . . 
    . . . . 4 5 5 5 5 5 5 . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . . 2 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 2 5 5 2 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 2 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 2 5 . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . . 5 2 5 5 . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . . 5 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
info.setScore(0)
scene.setBackgroundColor(6)

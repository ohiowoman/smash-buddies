controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (REDJUMPCOUNT <= 1) {
        RED_MONKE.vy = -100
        REDJUMPCOUNT += 1
    }
})
let REDJUMPCOUNT = 0
let RED_MONKE: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
RED_MONKE = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f 2 2 2 2 2 f . . . . . . 
    . . f d d d d 2 2 2 f . . . . . 
    . c d f d d f d 2 2 f f . . . . 
    . c d f d d f d 2 2 d d f . . . 
    c d 2 2 d d d d 2 2 b d c . . . 
    c d d d d c d d 2 2 b d c . f f 
    f c c c c a d d 2 2 f c . f 2 f 
    . f d d d d a a 2 f f . . f 2 f 
    . . f f f f f 2 2 2 2 f . f 2 f 
    . . . . f 2 2 2 2 2 2 2 f f 2 f 
    . . . f 2 f f 2 f 2 2 2 2 f f . 
    . . . f 2 f f 2 f 2 2 2 2 f . . 
    . . . f d b f d b f f 2 f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(RED_MONKE, 100, 0)
RED_MONKE.ay = 200
REDJUMPCOUNT = 2
game.onUpdate(function () {
    if (RED_MONKE.isHittingTile(CollisionDirection.Bottom)) {
        REDJUMPCOUNT = 0
    }
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (REDJUMPCOUNT <= 1) {
        RED_MONKE.vy = JUMP_SPEED
        REDJUMPCOUNT += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
	
})
let RED_MONKE: Sprite = null
let REDJUMPCOUNT = 0
let JUMP_SPEED = 0
let GRAVITY = 250
JUMP_SPEED = -120
REDJUMPCOUNT = 2
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
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
RED_MONKE.ay = 250
scene.centerCameraAt(80, 60)
game.onUpdate(function () {
    if (RED_MONKE.isHittingTile(CollisionDirection.Bottom)) {
        REDJUMPCOUNT = 0
    }
})

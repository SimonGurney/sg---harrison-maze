namespace SpriteKind {
    export const cave = SpriteKind.create()
    export const flametorch = SpriteKind.create()
    export const barrier = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.cave, function (sprite, otherSprite) {
    caveland()
})
function frozenland (x: number, y: number) {
    effects.blizzard.startScreenEffect()
    tiles.setTilemap(tilemap`level1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(x, y))
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite)
    mySprite2 = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.cave)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(23, 15))
    barrier = sprites.create(img`
        . . . . 8 8 9 9 9 8 . . . . . . 
        . . . . 8 9 9 9 9 8 . . . . . . 
        . . . . 8 9 9 9 9 8 . . . . . . 
        . . . . 8 9 9 9 9 8 8 . . . . . 
        . . . . 8 9 9 9 9 8 8 . . . . . 
        . . . . 8 9 9 9 9 8 8 . . . . . 
        . . . . 8 9 9 9 9 8 8 . . . . . 
        . . . . 8 8 9 9 9 8 8 . . . . . 
        . . . . 8 8 9 9 9 8 8 . . . . . 
        . . . . 8 8 9 9 9 8 8 . . . . . 
        . . . . 8 8 9 9 9 8 8 . . . . . 
        . . . . 8 8 9 9 9 8 8 . . . . . 
        . . . . 8 8 9 9 9 8 8 . . . . . 
        . . . . 8 8 9 9 9 8 8 . . . . . 
        . . . . . 8 9 9 9 8 8 . . . . . 
        . . . . . 8 9 9 9 8 . . . . . . 
        `, SpriteKind.barrier)
    tiles.placeOnTile(barrier, tiles.getTileLocation(4, 10))
    princess = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 3 9 3 9 . 5 5 . . . 
        . . . 5 5 . 3 3 3 . . 5 5 . . . 
        . . . 5 5 . . a . . . . 5 . . . 
        . . . 5 . . . a a . . . 5 . . . 
        . . . . 3 3 a a a 3 3 3 3 . . . 
        . . . 3 3 . a a a a . . 3 . . . 
        . . . 3 . . a a a a . . . 3 . . 
        . . . . . . a a a a a . . 3 . . 
        . . . . . . a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(princess, tiles.getTileLocation(6, 8))
}
function titleScreen () {
    game.splash("* ICE wOrLd *")
    scene.setBackgroundColor(8)
    effects.blizzard.startScreenEffect()
    game.showLongText("Welcome to Ice World!", DialogLayout.Top)
    game.showLongText("An EVIL wizard has frozen the grand palace!!", DialogLayout.Bottom)
    game.showLongText("Find the mystic fire and save the princess", DialogLayout.Bottom)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.flametorch, function (sprite, otherSprite) {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 5 . . 4 . . . 
        . . . . . . 5 5 5 5 5 . 4 . . . 
        . . . . . . 5 9 3 9 5 4 4 4 . . 
        . . . . . . 3 3 b 3 3 4 2 4 . . 
        . . . . . . 3 1 1 1 3 . e . . . 
        . . . . . . 7 3 3 3 7 . e . . . 
        . . . . . . . . 7 . . . 7 . . . 
        . . . . . 7 7 7 7 7 7 7 7 . . . 
        . . . . . 7 . . 7 . . . . . . . 
        . . . . . 7 . . 7 . . . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 . . . 7 . . . . . 
        . . . . . . 7 . . . 7 . . . . . 
        . . . . . . 7 . . . 7 . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    frozenland(23, 14)
    mySprite2.destroy()
    flametorch.destroy()
    has_flame = 1
})
function caveland () {
    effects.blizzard.endScreenEffect()
    tiles.setTilemap(tilemap`level4`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 2))
    flametorch = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . 4 4 2 4 4 . . . . . 
        . . . . . 4 4 2 2 2 4 . . . . . 
        . . . . . 4 4 2 2 2 4 . . . . . 
        . . . . . . 4 2 2 2 4 . . . . . 
        . . . . . . . 4 2 2 . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        `, SpriteKind.flametorch)
    tiles.placeOnTile(flametorch, tiles.getTileLocation(0, 4))
    princess.destroy()
    barrier.destroy()
    game.showLongText("find the MysTiC FlAmE or be trapped forever!!!!!", DialogLayout.Bottom)
}
sprites.onDestroyed(SpriteKind.barrier, function (sprite) {
    pause(500)
    princess.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.barrier, function (sprite, otherSprite) {
    if (has_flame) {
        barrier.destroy(effects.warmRadial, 1000)
    } else {
        game.showLongText("You need the mystic flame, keep looking", DialogLayout.Top)
        mySprite.x = 50
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.showLongText("Well done, the princess is saved!", DialogLayout.Top)
    game.over(true)
})
let flametorch: Sprite = null
let princess: Sprite = null
let barrier: Sprite = null
let mySprite2: Sprite = null
let has_flame = 0
let mySprite: Sprite = null
titleScreen()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . . 5 9 3 9 5 . . . . . 
    . . . . . . 3 3 b 3 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 7 3 3 3 7 . 7 . . . 
    . . . . . . . . 7 . . . 7 . . . 
    . . . . . 7 7 7 7 7 7 7 7 . . . 
    . . . . . 7 . . 7 . . . . . . . 
    . . . . . 7 . . 7 . . . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 . . . 7 . . . . . 
    . . . . . . 7 . . . 7 . . . . . 
    . . . . . . 7 . . . 7 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
frozenland(0, 14)
has_flame = 0

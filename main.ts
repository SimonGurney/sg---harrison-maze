function titleScreen () {
    game.splash("* ICE wOrLd *")
    scene.setBackgroundColor(8)
    effects.blizzard.startScreenEffect()
    tiles.setTilemap(tilemap`level1`)
    game.showLongText("Welcome to Ice World!", DialogLayout.Top)
    game.showLongText("An EVIL wizard has frozen the grand palace!!", DialogLayout.Bottom)
    game.showLongText("Find the mystic fire and save the princess", DialogLayout.Bottom)
    tiles.setTilemap(tilemap`level1`)
}
titleScreen()

export default class Background {
  constructor(game) {
    this.game = game;
  }
  draw(context) {
    context.fillStyle = '#000'
    context.fillRect(0, 0, this.game.width, this.game.height)

    context.fillStyle = '#fff'
    context.font = "40px monospace"
    //context.fillText(this.game.player.score, game.width * 3 / 8, 50)
    //context.fillText(game.bot.score,    game.width * 5 / 8, 50)
  }

}

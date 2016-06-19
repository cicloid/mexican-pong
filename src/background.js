export default class Background {
  constructor(game) {
    this.game = game;
  }
  draw(ctx) {
    ctx.fillStyle = 'Black'
    ctx.fillRect(0, 0, this.game.width, this.game.height)

    // draw middle of the court
    ctx.strokeStyle = 'white'
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.setLineDash([15, 10])
    ctx.moveTo(this.game.width / 2, 0)
    ctx.lineTo(this.game.width / 2, this.game.height)
    ctx.stroke()
    ctx.fill()

    ctx.fillStyle = 'White'
    ctx.font = "40px monospace"
    ctx.fillText(this.game.playerOne.points, this.game.width * 3 / 8, 50)
    ctx.fillText(this.game.playerTwo.points, this.game.width * 5 / 8, 50)
  }

}
